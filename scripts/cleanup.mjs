import fs from 'fs/promises'
import pLimit from 'p-limit'
import { Octokit } from '@octokit/core'

let OUT_DATE = 1000 * 60 * 60 * 24 * 30 * 9 // 9 months

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const limit = pLimit(5)

const REG_ITEM = /^- \[.*?\]\((.*?)\)/
const REG_REPO = /^https:\/\/github\.com\/([\w\d-]+?)\/([\w\d-]+?)(?:\/|$)/

function toHumanreadableString(seconds) {
  const s = Math.floor(seconds / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)
  const mo = Math.floor(d / 30)
  const y = Math.floor(d / 365)

  if (y > 0) {
    return `${y}y`
  }
  if (mo > 0) {
    return `${mo}m`
  }
  if (d > 0) {
    return `${d}d`
  }
  return '<1d'
}

function average(arr) {
  return arr.reduce((a, b) => a + b) / arr.length
}

async function run() {
  const content = await fs.readFile('README.md', 'utf-8')
  const lines = content.split('\n')
  const outdatedIndex = []

  const ages = []

  await Promise.all(
    lines.map(async (line, index) => {
      return limit(async () => {
        const match = line.match(REG_ITEM)
        if (!match) return
        const link = match[1]
        const match2 = link.match(REG_REPO)
        if (!match2) return
        const [, owner, repo] = match2
        const name = owner + '/' + repo
        if (['rollup', 'vitejs'].includes(owner)) return

        try {
          const { data } = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner,
            repo,
          })
          const date = data?.[0]?.commit?.author?.date
          if (!date) return
          const ms = +new Date(date)
          const delta = Date.now() - ms
          const time = toHumanreadableString(delta).padStart(5)

          ages.push(delta)

          if (delta > OUT_DATE) {
            console.log(name.padEnd(50, ' '), time, '⛔️')
            outdatedIndex.push(index)
          } else {
            console.log(name.padEnd(50, ' '), time)
          }
        } catch (e) {
          console.error(name, e.toString())
        }
      })
    })
  )

  console.log('\n------\n')
  console.log(`${ages.length} repos at average of ${toHumanreadableString(average(ages))} old`)
  console.log(`${outdatedIndex.length} repos out-of-dated`)

  if (outdatedIndex.length) {
    const newContent = lines.filter((_, idx) => !outdatedIndex.includes(idx)).join('\n')

    await fs.writeFile('README.md', newContent, 'utf-8')
    console.log('write to README.md')
  }
}

run()

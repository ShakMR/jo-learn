import express, { Response, Request as ExpressRequest } from 'express'
import fs from 'fs-extra'
import path from 'path'
import { markdown } from './markdown.js'

const app = express()
const PORT = process.env.PORT || 3000

const basePath = path.join('..','cls')
const baseREADME = 'README.md'
const indexFile = './src/index.html'

interface Request extends ExpressRequest {
  referrerPath?: string
  filePath?: string
}

const render = async (content: string, res: Response) => {
  const indexTemplate = await fs.readFile(indexFile, { encoding: 'utf8' })
  const index = indexTemplate.replace('{{body}}', content)
  res.send(index)
}

const serveMD = async ({filePath}: Request, res: Response) => {
  let md
  try {
    md = await fs.readFile(filePath!,  "utf-8")
  } catch (err) {
    console.error('Error opening the file', err)
    return res.status(404).send('File not found')
  }

  await render(markdown.render(md), res)
}

const getRealpath = (filePath: string, referrer?: string) => {
  if (referrer && filePath.indexOf('/r/') === 0) {
    return path.join(referrer!, filePath.replace('/r/', ''))
  } else {
    return filePath
  }
}

const buildPath = (realPath: string) => {
  let suffix = realPath.indexOf(baseREADME) === -1 ? baseREADME : ''
  return path.join(basePath, realPath, suffix)
}

const getReferrerPath = (req: Request) => {
  const referrerString = req.get('referrer')
  if (referrerString) {
    const url = new URL(referrerString)
    return url.pathname
  }
  return ''
}

app.use((req: Request, res, next) => {
  req.referrerPath = getReferrerPath(req)
  next()
})

app.use((req: Request, res, next) => {
  const realPath = getRealpath(req.path, req.referrerPath)
  if (realPath !== req.path) {
    return res.redirect(realPath)
  }
  req.filePath = buildPath(buildPath(realPath))
  next()
})

app.get('/*.md', serveMD)
app.get('/*', serveMD)

app.listen(PORT, () => {
  console.log(`Server Up and Listening on: http://localhost:${PORT}`)
})

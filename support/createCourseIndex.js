let fs = require('fs-extra')
let path = require('path')

const basePath = '../cls'
const templatePath = './introReadmeTemplate.md'

const getREADMEsRecursively = async (startpath) => {
  const dirs = [startpath]
  const readmes = []
  for (let dir of dirs) {
    const files = await fs.readdir(dir)
    for (let f of files) {
      const relPath = path.join(dir, f)
      if (f.indexOf('README.md') !== -1) {
        readmes.push(relPath)
      } else if ((await fs.stat(relPath)).isDirectory()) {
        dirs.push(relPath)
      }
    }
  }
  return readmes
}

const turnCamelCaseToNormal = (string) => {
  return string.replace(/([A-Z])/g, ' $1').trim()
}

const buildIndex = (readmes) => {
  let index = ''
  for (let readme of readmes) {
    const splittedPath = readme.split('/')
    const pathName = turnCamelCaseToNormal(splittedPath[splittedPath.length - 2])
    const levels = splittedPath.length - 3
    for (let i = 0; i < levels; i++) {
      index += '\t'
    }
    const folderPath = readme.split('/').slice(0, -1).join('/')
    index += `- [${pathName}](${folderPath})\n`
  }
  return `${index}\n\n`
}

const main = async () => {
  const [routeToWrite, ...readmes] = await getREADMEsRecursively(basePath)
  const cleanReadmes = readmes.map(rmd => rmd.replace('../cls', '.'))
  const index = buildIndex(cleanReadmes)
  const templateString = await fs.readFile(templatePath, "utf-8")
  const rr = templateString.replace('{{indexHere}}', index)
  console.log(rr)
  await fs.writeFile(routeToWrite, rr)
}

main()

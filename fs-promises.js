const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const appendFileContent = '\n\nHello World'

const fsWithPromises = async () => {
  try {
    const isExist = fs.existsSync(path.join(__dirname, 'files', 'NewPromisesFs.txt'))
    if (isExist) {
      await fsPromises.unlink(path.join(__dirname, 'files', 'NewPromisesFs.txt'))
      console.log('file remove complete')
    }
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'readFile.txt'), 'utf8')
    console.log(data)
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promisesFs.txt'), data)
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promisesFs.txt'), appendFileContent)
    await fsPromises.rename(
      path.join(__dirname, 'files', 'promisesFs.txt'),
      path.join(__dirname, 'files', 'NewPromisesFs.txt')
    )
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'NewPromisesFs.txt'), 'utf8')
    console.log(newData)
  } catch (error) {
    console.log(error)
  }
}

fsWithPromises()
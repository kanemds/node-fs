const fsPromises = require('fs').promises
const path = require('path')

const readFileWithPromises = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'readFile.txt'), 'utf8')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

readFileWithPromises()
const fs = require('fs')
const path = require('path')

const content = 'testing'

fs.writeFile(path.join(__dirname, 'files', 'writeFile.txt'), content, (error) => {
  if (error) throw error
  console.log('a', 'write complete')
})


// thorw error if the __dirname is not exist
// fs.writeFile(path.join(__dirname, 'errorPath', 'writeFile.txt'), content, (error) => {
//   if (error) throw error
//   console.log('a', 'write complete')
// })


process.on('uncaughtException', error => {
  console.log(`There was an uncaught error: ${error}`)
  process.exit(1) // exit
})
const fs = require('fs')
const path = require('path')

const content = 'file has been created or updated'

// file will be create if not exist
fs.appendFile(path.join(__dirname, 'files', 'updateFile.txt'), content, (error) => {
  if (error) throw error
  console.log('a', 'appendFile successfully')
})

// thorw error if the __dirname is not exist
// fs.appendFile(path.join(__dirname, 'errorPath', 'updateFile.txt'), content, (error) => {
//   if (error) throw error
//   console.log('a', 'appendFile successfully')
// })

process.on('uncaughtException', error => {
  console.log(`There was an uncaught error: ${error}`)
  process.exit(1) // exit
})
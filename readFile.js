const fs = require('fs')
const path = require('path')

// read file 
fs.readFile('./files/readFile.txt', (error, data) => {
  if (error) throw error
  console.log('a', data) // return buffer
})

fs.readFile('./files/readFile.txt', 'utf8', (error, data) => {
  if (error) throw error
  console.log('b', data) // return file text
})

// better way of read file
fs.readFile(path.join(__dirname, 'files', 'readFile.txt'), 'utf8', (error, data) => {
  if (error) throw error
  console.log('c', data)
})


// return error message due to file name is not exist, if error occur, the rest of the code won't run 
// fs.readFile('./readingError.txt', 'utf8', (error, data) => {
//   if (error) throw error
//   console.log(data)
// })

// exit on uncaught errors, if error occur, the rest of the code won't run 
process.on('uncaughtException', error => {
  console.log(`There was an uncaught error: ${error}`)
  process.exit(1) // exit
})
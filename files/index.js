const fs = require('fs')

// read file 
fs.readFile('./starter.txt', (error, data) => {
  if (error) throw error
  console.log(data) // return buffer
})

fs.readFile('./starter.txt', 'utf8', (error, data) => {
  if (error) throw error
  console.log(data) // return file text
})
fs.readFile('./starter.txt', 'utf8', (error, data) => {
  if (error) throw error
  console.log(data) // return file text
})
fs.readFile('./starter.txt', 'utf8', (error, data) => {
  if (error) throw error
  console.log(data) // return file text
})

fs.readFile('./readingError.txt', 'utf8', (error, data) => {
  if (error) throw error
  console.log(data) // return error message due to file name is not exist
})

// exit on uncaught errors, if error occur, the rest of the code won't run 
process.on('uncaughtException', error => {
  console.log(`There was an uncaught error: ${error}`)
  process.exit(1) // exit
})
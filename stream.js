const fs = require('fs')
const path = require('path')

// Why streams
// Streams basically provide two major advantages compared to other data handling methods:

// Memory efficiency: you don’t need to load large amounts of data in memory before you are able to process it
// Time efficiency: it takes significantly less time to start processing data as soon as you have it, rather than having to wait with processing until the entire payload has been transmitted

const streamCreator = fs.createReadStream(path.join(__dirname, 'files', 'largeFile.txt'), { encoding: 'utf8' })

const streamWriter = fs.createWriteStream(path.join(__dirname, 'files', 'new-largeFile.txt')) // this code will also create a new file 


// streamCreator.on('data', data => {
//   console.log('processing data from largeFile.txt')
//   streamWriter.write(data)
// })

// this is more efficient than the code above


streamCreator.pipe(streamWriter)
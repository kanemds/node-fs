const fs = require('fs')
const path = require('path')


// __dirname,create folder current path, create folder inside  
if (!fs.existsSync('./new/insideNew')) {
  fs.mkdir(path.join(__dirname, 'new', 'insideNew'), (error) => {
    if (error) throw error
    console.log('folder created')
  })
}

if (fs.existsSync('./new/insideNew')) {
  fs.rmdir(path.join(__dirname, 'new', 'insideNew'), (error) => {
    if (error) throw error
    console.log('folder removed')
  })
}

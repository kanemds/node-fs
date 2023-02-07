const fs = require('fs')
const path = require('path')

const writeContent = 'How is the weather?'
const updateContent = "\n\nIt's Great." // \n means new line

fs.writeFile(path.join(__dirname, 'files', 'writeAndUpdate.txt'), writeContent, (error) => {
  if (error) throw error
  console.log('write complete')

  fs.appendFile(path.join(__dirname, 'files', 'writeAndUpdate.txt'), updateContent, (error) => {
    if (error) throw error
    console.log('update complete')

    fs.rename(
      path.join(__dirname, 'files', 'writeAndUpdate.txt'),
      path.join(__dirname, 'files', 'writeAndUpdate-callback-hell'), (error) => {
        if (error) throw error
        console.log('rename complete')
      })
  })
})
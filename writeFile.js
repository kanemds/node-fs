const fs = require('fs')
const path = require('path')

const content = 'testing'

fs.writeFile(path.join(__dirname, 'files', 'writeFile.txt'), content, (error) => {
  if (error) throw error
  console.log('a', 'write complete')
})
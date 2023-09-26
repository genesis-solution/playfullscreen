const fs = require('fs')
const fse = require('fs-extra')
const childProcess = require('child_process')

if (fs.existsSync('./build')) {
  fse.removeSync('./build')
}

// Run 'react-scripts build' script
childProcess.execSync('react-scripts build', { stdio: 'inherit' })

// Move app build to server/build directory
fse.moveSync('./build', './server/public/build', { overwrite: true })
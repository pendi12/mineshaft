
/* ------------------------- External Dependencies -------------------------- */
const { spawn } = require('child_process');
const path = require('path')
const chalk = require('chalk');
const fs = require('fs')
/* ------------------------- Internal Dependencies -------------------------- */

/* ---------------------------- Initialization ------------------------------ */
function main() { 
  const inputDir = path.resolve('foundry/smelt')
  const outputDir = path.resolve('foundry/compiled')
  if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

  // Scan the Foundry Minerals
  for (let childDirectory of fs.readdirSync(inputDir)){

    // Scan the Foundry Mineral Packages
    if (fs.statSync(path.join(inputDir, childDirectory)).isDirectory()){
      
      // Scan the directory for for ".c" and ".c++" files
      let childDirectoryItems = fs.readdirSync(path.join(inputDir,childDirectory))

      if (childDirectoryItems) {
        // console.log(childDirectoryItems)
          childDirectoryItems.map(function(item){
            const e = '/^\.[^.]+$/g'
            let fileNameWasm = item.substr(0, item.lastIndexOf(".")) + ".wasm";
            console.log(fileNameWasm)

            let targetFile = path.join(inputDir,childDirectory,item)
            let wasmFile = path.join(outputDir,childDirectory,fileNameWasm)

            if(!fs.existsSync(path.resolve(outputDir,childDirectory))) { fs.mkdirSync(path.resolve(outputDir,childDirectory))}
          
            const webAssemblyCompile = spawn('wa', ['compile', '-o', wasmFile, targetFile]);
              webAssemblyCompile.stdout.on('data', (data) => {
                console.log(`${data}`);
              });

              webAssemblyCompile.stderr.on('data', (data) => {
                console.log(`${data}`);
              });
          })
      }

    }
  }
}
main()
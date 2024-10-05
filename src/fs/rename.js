import fs from 'fs/promises'
import {fileURLToPath } from 'url'
import {dirname, join} from 'path'
const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

const rename = async () => {
    const wrongFileName = 'wrongFileName.txt'
    const properFileName = 'properFileName.md'
    const wrongFilePath = join(__dirName, 'files', wrongFileName)
    const properFilePath = join(__dirName, 'files', properFileName)
    // Write your code here 
    try{
        await fs.access(wrongFilePath) 
        await fs.access(properFilePath).then(()=>{throw new Error('FS operation failed:file already exists')})
        .catch(err=>{
            if(err.code !== "ENOENT"){
                throw new Error('FS operation failed')
            }
        }) 

        await fs.rename(wrongFilePath, properFilePath)
    } catch(err){
        console.error('FS operation failed')
    }
};

await rename();
// wrongFileName.txt
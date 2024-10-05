import fs from 'fs'
import path from 'path'
import {fileURLToPath } from 'url'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

const write = async () => {
    // Write your code here
    const filePath = path.join(__dirName, 'files', 'fileToWrite.txt' ) 
    const stream = fs.createWriteStream(filePath)
     
    process.stdin.pipe(stream)
};

await write();
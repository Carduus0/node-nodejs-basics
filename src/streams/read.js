import fs from 'fs'
import path from 'path'
import {fileURLToPath } from 'url'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)
const read = async () => {
    const filePath = path.join(__dirName, 'files', '/fileToRead.txt' )
    // Write your code here
    const readableStream = fs.createReadStream(filePath, {encoding: 'utf8'}) 
    readableStream.pipe(process.stdout)
};

await read();
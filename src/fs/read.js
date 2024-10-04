import {promises as fs} from 'fs'
import path from 'path'
const read = async () => {
    // Write your code here 
    const fileName = 'fileToRead.txt'
    const foldername = 'files'
    const filePath = path.join(foldername, fileName)
    try{
        await fs.access(filePath)
        const outcome = await fs.readFile(filePath, 'utf8')
        console.log(outcome)
    }catch(err){
      console.error('FS operation failed')
    }

};

await read();
import fs from 'fs/promises'
import {fileURLToPath } from 'url'
import {dirname, join} from 'path'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

const remove = async () => {
    // Write your code here 
    const fileToRemovePath = join(__dirName, 'files', "fileToRemove.txt")
    try {
        await fs.access(fileToRemovePath)

        await fs.unlink(fileToRemovePath)
    } catch(err){
        if(err.code === 'ENOENT'){
           throw new Error('FS operation failed') 
        }

    }
};

await remove();
// "fileToRemove.txt" How dare you!
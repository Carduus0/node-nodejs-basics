import fs from 'fs/promises'
import {fileURLToPath } from 'url'
import {dirname, join} from 'path'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)
const list = async () => {
    try{
const output = await fs.readdir(join(__dirName, "files"))
console.log(output);

    } catch(err){
console.error(new Error("FS operation failed"));

    }
};

await list();
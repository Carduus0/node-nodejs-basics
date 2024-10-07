import fs from 'fs/promises'
import path from 'path'

const copy = async () => {
    // Write your code here 
    const originalFolder = './src/fs/files'
    const replica = './src/fs/files_copy'
    try{
        await fs.access(originalFolder)//fs.constants.R_OK
        try{
            await fs.access(replica)
        }catch(err){
            if(err.code !== 'ENOENT'){
                throw err;
            }
        }
        await fs.mkdir(replica)
        await fs.cp(originalFolder, replica, {recursive: true})
    }catch(err){
     throw new Error('FS operation failed')
    }
};

await copy();

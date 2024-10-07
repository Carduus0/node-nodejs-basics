import fs from 'fs/promises'

const read = async () => {
    // Write your code here 
    try{
        const outcome = await fs.readFile("./src/fs/files/fileToRead.txt");
        console.log(outcome.toString())
    }catch(err){
      console.error('FS operation failed')
    }

};

await read();
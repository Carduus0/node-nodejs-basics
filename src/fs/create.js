import fs from 'fs/promises'
const filePath = './src/fs/files/fresh.txt'
const create = async () => {
    // Write your code here 
    try{
        await fs.access(filePath);
        console.error('FS operation failed: File already exists');
    }catch(err) {
        if(err.code === 'ENOENT'){
            await fs.writeFile(filePath, 'I am fresh and young')
            console.log('File created successfully: fresh.txt');
        }else{
            console.error('FS operation failed', err);
            
        }
    }
    
};

await create();
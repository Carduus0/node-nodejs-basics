import {Transform} from 'stream'
const transform = async () => {
    // Write your code here 
    const reverse = new Transform({
        transform(chunk, encoding, callback){
            this.push(chunk.toString().trim().split('').reverse().join('')+'\n')
            callback()
        }
    })
    process.stdin.pipe(reverse).pipe(process.stdout)
};

await transform();
import {Worker} from 'worker_threads'
import os from 'os'
import path from 'path'
import {fileURLToPath } from 'url'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)
const performCalculations = async () => {
    // Write your code here
    const numOfCores = os.cpus().length
    const workers = []
    const results = Array(numOfCores).fill(null)
    let completed = 0

    const createWorker = (index, numberToCompute) =>{
        return new Promise((resolve)=>{
            const worker = new Worker(path.resolve(__dirName,'./worker.js'), {
                workerData: numberToCompute,
            })
            worker.on('message', (result) =>{
                results[index] = {status:'resolved', data: result}
                resolve()
            
            })

            worker.on('error', () =>{
                results[index] = {status:'error', data: null}
                resolve()
            
            })

            worker.on('exit', (code) =>{
                if(code !== 0){
                    results[index] = {status: 'error', data: null}
                }
                completed++
                if(completed === numOfCores){
                    console.log(results);

                }
            })
        })


    }

    for(let i = 0; i < numOfCores; i++){
        const numberToCompute = 10 + i;
        workers.push(createWorker(i, numberToCompute))
    }

    await Promise.all(workers)
};

await performCalculations();
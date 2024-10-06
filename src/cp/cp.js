import {spawn} from 'child_process'
const arg1 = 121212
const arg2 = 343434
const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['src/cp/files/script.js', ...args], {stdio: ['pipe', 'pipe', 'pipe', 'ipc']})
    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)

    child.on('exit', (code)=>{
        console.log(code);
        
    })
    child.on('error', (err)=>{
        console.log(err);
        
    })

};

// Put your arguments in function call to test this functionality
spawnChildProcess([arg1, arg2] /* [someArgument1, someArgument2, ...] */);

// CLOSE for a child process to be terminated correctly

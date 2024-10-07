
const parseEnv = () => {
    // Write your code here 
    const prefix = 'RSS_' //'PATH'
    const processEnv = process.env
    Object.keys(processEnv).filter(key => key.startsWith(prefix))
    .forEach(key=>{
        const trimmedKey = key.replace(prefix, '')
    console.log(`${prefix}${trimmedKey}=${processEnv[key]}`);
})

};

parseEnv();
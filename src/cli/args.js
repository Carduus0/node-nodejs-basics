const argS = process.argv.slice(2);
const parseArgs = () => {
  // Write your code here
  const props = {};
  for (let i = 0; i < argS.length; i += 2) {
    const propName = argS[i].replace(/^--/, "");
    const propVal = argS[i + 1];
    props[propName] = propVal;
  }
  Object.keys(props).forEach((propName) => {
    console.log(`${propName} is ${props[propName]}`);
  });
};

parseArgs();

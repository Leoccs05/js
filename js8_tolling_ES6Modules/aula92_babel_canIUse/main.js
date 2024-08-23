const nome = 'Luiz';
const obj = {nome};
const novoObj = {...obj};
console.log(novoObj)

//npm init -y cria o package.json

//npm install --save-dev @babel/cli @babel/preset-env @babel/core cria package-lock.json e altera a dependencia do package.json

//npx babel main.js -o bundle.js --presets=@babel/env cria um bundle.js e converte o codigo

//"babel":"babel ./main-js -o ./bundle.js --presets=@babel/env -w" para compilar automaticamente no package.json

//"npm run babel" no terminal para ele ficar compilando automaticamente
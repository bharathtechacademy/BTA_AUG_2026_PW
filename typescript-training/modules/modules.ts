//modules in typescript

//In TypeScript, each and every file will be treated as an independent component. 
//Whenever we want to share any data or functions from one file to another file, we are going to convert this independent file or component into a module, and we are going to share it with other files. 

//By using these modules, now we can export the data from the current file to another file and, at the same time, import the data from another file to the current file. 

//Whenever we want to use these imports and exports within JavaScript and TypeScript, we need to first add the configurations within the package.json file. 

//Before modules 

// {
//   "devDependencies": {
//     "ts-node": "^10.9.2",
//     "typescript": "^7.0.2"
//   },
//   "dependencies": {
//     "tsx": "^4.23.12"
//   }
// }

//After modules

// {"type": "module",
//   "devDependencies": {
//     "ts-node": "^10.9.2",
//     "typescript": "^7.0.2"
//   },
//   "dependencies": {
//     "tsx": "^4.23.12"
//   }
// }

//Add additional configurations in the tsconfig.json file. 

// "allowImportingTsExtensions": true,
// "noEmit": true,
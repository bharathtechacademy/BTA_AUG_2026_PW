# Playwright TDD Framework design  - step by step 

* Pre-Conditions : 

Install VS-Code (https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)
Install Node.js (https://nodejs.org/dist/v26.11.1/node-v26.11.1-x64.msi)

* Useful Extensions of VS Code : 

JavaScript (ES6) code snippets 
JavaScript Debugger (Nightly)
JavaScript and TypeScript Nightly
Code Runner
Cucumber
Live Server
Playwright Test for VSCode

## 1. 'Create a local working directory' 
* Ex: playwright-tdd-framework (local working directory)
* terminal command : cd C:\Training\PlaywrightTrainings\Aug_2026\playwright-tdd-framework

## 2. Install all the necessary dependencies based on project needs. 
1. **TypeScript** — `npm install typescript ts-node @types/node` and `npx tsc --init` (tsconfig.json) - For programming language support 
2. **Playwright** — `npm init playwright@latest` - To automate web and APIs 
3. **PostgreSQL** — `npm install pg @types/pg` to connect to a database and perform db validations
4. **Excel** — `npm install excel xlsx` to read or work with spreadsheet data.
5. **PDF** — `npm install pdf-parse-new` for PDF utilities.

## 3. Update the global configurations at the project level within the package.json and tsconfig.json. 

* package.json => "type": "module" //To import data or methods from one file into another file 
* tsconfig.json => "types": ["node"]  //To include the Node.js type definitions in the current project 
* tsconfig.json => "allowImportingTsExtensions": true //to allow importing TypeScript-related files in the current project 
* tsconfig.json =>   "noEmit": true //Whenever I am importing TypeScript-related files during the execution, don't emit any .js files. Silently run the TypeScript program. 

## 4. Creating the folder structure to maintain different components of the framework 

1. commons => Maintain all the common methods related to UI (commons\ui\web-commons.ts), API(commons\api\api-commons.ts), database(commons\db\db-commons.ts), performance testing(commons\load\jmeter-commons.ts), and AI (commons\ai\ai-commons.ts)  

2. config => config.json => To maintain all the configuration-related data, like URLs, database connection details, API endpoints, A-related endpoints, etc 

3. testdata => To maintain the test data related to each and every component, like UI(testdata\ui\data.json), API (testdata\api\data.json), database (testdata\db\data.json), AI(testdata\ai\data.json), and performance testing 

4. utilities => To maintain the common methods related to different types of utilities we are going to use in our framework based on our application needs (For example, Excel utility, PDF utility, database utility, etc. )

5. page-objects => To maintain page-wise locators (page-objects\page-elements) and page-wise common methods (page-objects\page-steps) separately to implement the page object model design pattern within the framework 

6. .env => To maintain environment-specific credentials and secret keys that we need to maintain locally to run our test cases 

7. tests => To maintain all the test cases related to each and every component 

8. files => To maintain any flat files like Excels, PDFs, any images, etc 

9. test-results => To maintain all the test results reports along with video traces, etc., related to test execution 

10. test-results/screenshots => To maintain all the screenshots related to different components during the execution 


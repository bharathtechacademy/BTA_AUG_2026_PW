# Framework design step by step 

## 1. Create a local working directory within the workspace. 
* Example : playwright-bdd-framewok (Local working directory )
* terminal-command : cd C:\Training\PlaywrightTrainings\Aug_2026\playwright-bdd-framework

## 2. Install necessary dependencies based on project needs. 
1. **TypeScript** — `npm install typescript ts-node @types/node` and `npx tsc --init` (tsconfig.json) for programming language support.
2. **Playwright** — `npm init playwright@latest` for web / API automation with the Playwright.
3. **PostgreSQL** — `npm install pg @types/pg` to connect to a database and perform db validations
4. **Excel** — `npm install excel xlsx` to read or work with spreadsheet data.
5. **PDF** — `npm install pdf-parse-new` for PDF utilities.
6. **Cucumber** - `npm install @cucumber/cucumber' To set up the Cucumber BDD framework and to integrate the feature file with the background step definition 

## 3. Update the global configurations at the project level within the package.json and tsconfig.json files. 
* package.json => "type":"module"  //To import data or methods from other files into the current 
* tsconfig.json =>"types": ["node"] //Include the node.js type definitions in this current project. 
* tsconfig.json =>"allowImportingTsExtensions": true //While importing the files, allow files with a TypeScript extension also. 
* tsconfig.json =>"noEmit": true //Whenever I am going to import TypeScript files during the execution, don't emit any .js files. Silently run all the TypeScript programs. 
* tsconfig.json =>"verbatimModuleSyntax": false  //TypeScript can remove type-only imports during the compilation. 

## 4. Creating the folder structure to maintain different components of the framework 

1. commons => Maintain all the common methods related to UI (commons\ui\web-commons.ts), API(commons\api\api-commons.ts), database(commons\db\db-commons.ts), performance testing(commons\load\jmeter-commons.ts), and AI (commons\ai\ai-commons.ts)  

2. config => config.json => To maintain all the configuration-related data, like URLs, database connection details, API endpoints, A-related endpoints, etc 

3. testdata => To maintain the test data related to each and every component, like UI(testdata\ui\data.json), API (testdata\api\data.json), database (testdata\db\data.json), AI(testdata\ai\data.json), and performance testing 

4. utilities => To maintain the common methods related to different types of utilities we are going to use in our framework based on our application needs (For example, Excel utility, PDF utility, database utility, etc. )

5. page-objects => To maintain page-wise locators (page-objects\page-elements) and page-wise common methods (page-objects\page-steps) separately to implement the page object model design pattern within the framework 

6. .env => To maintain environment-specific credentials and secret keys that we need to maintain locally to run our test cases 

7. files => To maintain any flat files like Excels, PDFs, any images, etc 

8. features => To maintain all the feature files with different test scenarios related to each and every functionality and each and every component (like UI, API, database, performance testing, etc.) 

9. step-definitions => To maintain the definition of each and every step mentioned in the feature file with respect to Playwright and TypeScript 

10. support => To maintain the hooks and supporting configurations 

11. reports => To maintain all the test result reports with videos, traces, etc 

12. cucumber.cjs => It is called a Cucumber runner file, where we are going to maintain all the details about the feature file, the respective step definitions, and where to add test results. 
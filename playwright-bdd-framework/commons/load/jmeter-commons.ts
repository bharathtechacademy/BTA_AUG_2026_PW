import {exec} from 'child_process';

export class JMeterCommons {

    //Common method to run a command from the command line (cmd)
    runCommand(command: string): Promise<String> {
        return new Promise((resolve, reject) => {

            //The `execute` method will help us to run any command in the command line by using TypeScript.
            //error => Error in the command. Meaning the command itself is invalid. 
            //stdout => The output received from the command 
            //stderr => Invalidate output received from the command. Meaning, the command is valid, but whatever application you are trying to target to get some output, somehow that is not working. 

            exec(command, (error, stdout, stderr) => {

                if(error){
                    reject(`While executing the command - ${error.message}`)
                }else{
                    resolve(stdout);
                }
                console.log(`Command executed successfully: ${command}`);

            });

        });

    }

    //Common method to run the JMeter test plan by using our command-line-related method 
    async runJMeterTestPlan(testPlanName: string): Promise<void> {

        //Collect and store JMeter folder paths. 
        const projectRoot = process.cwd();//playwright-tdd-framework root folder
        const jmeterBasePath = `${projectRoot}/step-definitions/load/jmeter`; //JMeter folder path inside the project root
        const jmeterToolPath = `${jmeterBasePath}/bin/jmeter.bat`; // Path to the JMeter batch file to launch jmeter tool
        const jmeterTestPlanPath = `${jmeterBasePath}/testplans/${testPlanName}`; // Full path to the JMeter test plan
        console.log(`Execution started for Jmeter test plan. ${testPlanName}`);

        //Add the folder paths related to test results. 
        const jmeterResultsPath = `${jmeterBasePath}/results/TestResults_${Date.now()}.csv`; // Folder to store JMeter test results
        const jmeterHtmlReport = `${jmeterBasePath}/report-output`; // Folder to store JMeter HTML report

        //Run the JMeter test plan using the command line. 
        const jmeterCommand = `"${jmeterToolPath}" -n -t "${jmeterTestPlanPath}" -l "${jmeterResultsPath}"`;      
        const jmeterReportCommand = `"${jmeterToolPath}" -g "${jmeterResultsPath}" -o "${jmeterHtmlReport}"`;
        
        await this.runCommand(jmeterCommand);
        await this.runCommand(jmeterReportCommand);
    }


}
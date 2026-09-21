import fs from 'fs';
import xlsx from 'xlsx';

export class ExcelUtil {


    static readExcel(filePath: string , sheetName: string) {

        //Verify whether the Excel file exists. 
        if(!fs.existsSync(filePath)){ //If the file does not exist within the given file path 
            throw new Error(`File not found in the path. : ${filePath}`)
        }

        //Read the workbook from the Excel file. 
        const workbook = xlsx.readFile(filePath);

        //Get the given sheet from the workbook. 
        const sheet = workbook.Sheets[sheetName];

        //Verify whether the sheet exists in the workbook. 
        if(!sheet){
            throw new Error(`Sheet not found in the workbook. : ${sheetName}`);
        }

        //Copy the complete data from the sheet and convert it into JSON. 
        return xlsx.utils.sheet_to_json(sheet);
    }
}

let data = ExcelUtil.readExcel('./files/TestData.xlsx', 'Sheet1');
console.log(data[0]);

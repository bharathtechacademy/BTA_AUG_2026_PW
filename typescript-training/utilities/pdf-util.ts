import fs from 'fs';
// @ts-ignore
import pdf from 'pdf-parse-fork';

export class PdfUtil {

    static async readPdf(filePath: string) {

        //Verify whether the PDF file exists. 
        if (!fs.existsSync(filePath)) { //If the file does not exist within the given file path 
            throw new Error(`File not found in the path. : ${filePath}`)
        }

        //read the pdf file
        const pdfFile = fs.readFileSync(filePath);

        //Read the text from pdf file and return the same. 
        return (await pdf(pdfFile)).text;
    }

}

let data :string = await PdfUtil.readPdf('./files/Data.pdf');
console.log(data);
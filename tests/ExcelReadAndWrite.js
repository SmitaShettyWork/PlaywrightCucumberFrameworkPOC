const ExcelJs= require('exceljs')
 //exceljs is a class which we imported
const workbook= new ExcelJs.Workbook // to use this calss we hv created a object of that var using new keywork to use its method
workbook.xlsx.readFile("C:\Users\x10821339\Downloads\playwrighttest\TestExceldata.xlsx").then(function(){
    const worksheet=workbook.getWorksheet('sheet1');

    worksheet.eachRow((row,rowNumber) => // this enter the rows
    {
    
        row.eachCell((cell,colNumber)=> // this will enter 1 row each column
        {
            console.log(cell.value);  // this will print each cell value of all the row and column 
        })
    
    })
});

// workbook is one of the method resent in it


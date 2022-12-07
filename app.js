const fs = require("fs");
const fileName = fs.readdirSync("./files")[0];
const xlsx = require("xlsx");

const workBook = xlsx.readFile(`./files/${fileName}`);
let workSheets = {};

for (const sheetName of workBook.SheetNames) {
    workSheets[sheetName] = xlsx.utils.sheet_to_json(workBook.Sheets[sheetName]);
};

fs.writeFileSync("./result/result.js", `const result = ${JSON.stringify(workSheets)}`);

console.log(workSheets);
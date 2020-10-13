
//* -------- Creating and using a Regular Expression --------
const regexpFullNameGlobal = /(?<firstLetter>[A-Z]){1}\w+ ([A-Z]{1}\w+,?)/g;
const regexpFullName = /([A-Z]){1}\w+ ([A-Z]{1}\w+,?)/;
const strNames = 'Michael Rojas, Mario Merino, Arturo Campos';
const strNames2 = 'Alfredo Bonilla';



//* ----------------------------------------------------------------------
//* regex.test() and regex.exec()
//* NOTE: Keep in mind that regular experssions are stateful when global or sticky flags are set

console.log(regexpFullNameGlobal.exec(strNames));
console.log(regexpFullNameGlobal.exec(strNames));
//* regexpFullNameGlobal.lastIndex = 0;
console.log(regexpFullNameGlobal.exec(strNames2));

console.log(regexpFullNameGlobal.test(strNames));



//* ----------------------------------------------------------------------
//* string.match() and string.matchAll()

// console.log('\n ------ \n match() Without Global: \n', strNames.match(regexpFullName));
// console.log('\n ------ \n match() With Global: \n', strNames.match(regexpFullNameGlobal));
// console.log('\n ------ \n matchAll() With Global: \n', [...strNames.matchAll(regexpFullNameGlobal)][2]);

//* string.search()

console.log('\n ------ \n search(): \n', strNames.search(regexpFullNameGlobal));



//* ----------------------------------------------------------------------
//* string.replace() and string.replaceAll()

console.log('\n ------ \n Replace first name with one letter : \n', strNames.replace(regexpFullName, '$1. $2'));

//* replaceAll() only exists in browsers, not in NodeJS
console.log('\n ------ \n Replace all first names with one letter : \n', strNames.replace(regexpFullNameGlobal, '$<firstLetter>. $2'));



//* ----------------------------------------------------------------------
//* VS Code - Replacing JSON characters to easily convert it into TS Model

const replaseProps = /"(.+)":/g
const replaceStringVals = /:\s*"(.+?)"/g
const replaceNumberVals = /:\s*(\d+(?:.\d+)?)/g
const replaseBooleanVals = /:\s*(true|false)/g


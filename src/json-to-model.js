//* ----------------------------------------------------------------------
//* VS Code - Replacing JSON characters to easily convert it into TS Model

// Find all the atributes in the JSON 
const replaseProps = /"(.+)":/g

// Find all the string values
const replaceStringVals = /:\s*"(.+?)"/g

// Find all the numeric values
const replaceNumberVals = /:\s*(\d+(?:.\d+)?[^"]$)/g

// Find all the boolean values
const replaseBooleanVals = /:\s*(true|false)/g


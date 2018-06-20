// var obj = {
//     name : "Tomo"
// }

// var stringObj = JSON.stringify(obj);
// console.log("ttype of Obj: ",typeof obj);
// console.log("Type of stringObj: ", typeof stringObj);
// console.log(stringObj);


// var personString = '{"name":"Tomo", "age":"27"}';
// var personObj = JSON.parse(personString);

// console.log(personString)
// console.log('type of personObj:', typeof personObj);
// console.log('person', personObj);



var fs = require('fs');

var personObj = {
    name : 'Tomo',
    age : '27',
    prefference : 'baseball'
}

var personString = JSON.stringify(personObj);
fs.writeFileSync('Personaldata.json', personString);

var personDataString = fs.readFileSync('Personaldata.json');
var PersonalData = JSON.parse(personDataString);

console.log(typeof PersonalData);
console.log(PersonalData);
console.log(PersonalData.name);


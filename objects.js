console.log("\n----CREATE AN OBJECT--------")

let  student = {
    firstName: "Gordon",
    lastName: "Free",
    age: 16,
    batchName: "FS111",
    hasWebcam: true,
    studentWithLicense: false
}
// Defining content of an Object similar to JSON format (Javascript Object Notation)

console.log(student)

console.log("\n----READING PROPERTIES--------")

// DOT NOTATION to access object's properties
let fullName = student.firstName + " " + student.lastName;

console.log("Full name: " + fullName)

console.log("\n----CHANGING PROPERTIES--------")

student.hasWebcam = false;
console.log("After change:" + student.hasWebcam);

student.age +=1;
console.log("Increase age" + " " + student.age);


console.log("\n----ADDING PROPERTIES--------")

student.location = "India";
student.toRemove = "abc";
console.log(student.location);

console.log("\n----REMOVE PROPERTIES--------")

delete student.toRemove

console.log("\n----ALTERNATIVE WAY TO ACCESS PROPERTIES--------")

console.log(student["location"]);

let discordName = student["firstName"];

console.log("Discord ID: " + discordName);


let propertyName = student.age >= 18 ? "studentWithLicense" : "studentWithScooter"
console.log("propertyName", propertyName)
student[propertyName]
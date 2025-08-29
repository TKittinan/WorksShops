let students = [
    {name : "Somchai",grade : "3.76"},
    {name : "Somying",grade : "3.50"},
    {name : "Somloy",grade : "2.90"}
];

students.forEach(function(students,index){
    console.log(`Student ${index + 1} : ${students.name},Grade: ${students.grade}`);
});

function showStudentCount(){
    console.log(`Total students : ${students.length}`);
}

showStudentCount();
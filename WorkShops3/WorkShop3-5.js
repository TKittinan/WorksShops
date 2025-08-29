let students = [
    { name: "Kiryu", score: 30 },
    { name: "Bargo", score: 60 },
    { name: "Certo", score: 70 },
    { name: "Dego", score: 90 },
    { name: "Ego", score: 10 },
    { name: "Fatho", score: 20 }
];

function filterPassedStudents(minScore) {
    students.forEach(student => {
        if (student.score >= minScore) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}

filterPassedStudents(50);
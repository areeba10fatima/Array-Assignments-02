// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
var student = {
    name: "Areeba",
    grades: [70, 60, 90, 88, 95]
};
console.log(student.name);
console.log(student.grades);
//2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.
var students = [
    {
        name: "Abeha",
        grades: [90, 80, 85, 70, 75]
    },
    {
        name: "Unzila",
        grades: [90, 70, 60, 80, 92]
    },
    {
        name: "Bisma",
        grades: [78, 80, 90, 95, 85]
    }
];
console.log("Name: ".concat(student.name));
console.log("Grades: ".concat(student.grades));
//3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
function calculateAverageGrade(grades) {
    if (grades.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    var average = total / grades.length;
    return average;
}
var studentGrades = [85, 88, 70, 92, 90];
var averageGrade = calculateAverageGrade(studentGrades);
console.log("The average grade is ".concat(averageGrade));
//4. Display each student's name and average grade. Iterate through the students array,calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.
function calculateAverageGrd(grades) {
    if (grades.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    var average = total / grades.length;
    return average;
}
;
var Students = [
    { name: "Abeha", grades: [90, 80, 85, 70, 75] },
    { name: "Unzila", grades: [90, 70, 60, 80, 92] },
    { name: "Bisma", grades: [78, 80, 90, 95, 85] },
];
for (var i = 0; i < students.length; i++) {
    var student_1 = students[i];
    var averageGrade_1 = calculateAverageGrd(student_1.grades);
    console.log("".concat(student_1.name, "'s average grade is ").concat(averageGrade_1));
}
;

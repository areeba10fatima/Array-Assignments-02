// Part 2: Multi-Dimensional Arrays and Tuples - Student Grades

//Challenge:
//You are tasked with creating a student grading system. Implement functions and logic to manage student grades effectively.

//1. Define a TypeScript type alias named Student to represent a student with the following properties:
//• name (string): The name of the student.
//• grades (number[ ]): An array of grades for different subjects.

type Student = {
    name: string;
    grades: number[];
  };

let student: Student = {
    name: "Areeba",
    grades: [70, 60, 90, 88, 95]
  };
console.log(student.name);
console.log(student.grades);

//2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.

let students: Student[] = [
    {
      name: "Abeha",
      grades:  [90,80,85,70,75]
    },
    {
      name: "Unzila",
      grades: [90,70,60,80,92]
    },
    {
      name: "Bisma",
      grades: [78,80,90,95,85]
    }
  ];
  console.log(`Name: ${student.name}`);
  console.log(`Grades: ${student.grades}`);

//3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.

function calculateAverageGrade(grades: number[]): number {
    if (grades.length === 0) {
      return 0;
    }

    let total = 0;
    for (let i = 0; i < grades.length; i++) {
      total += grades[i];
    }

    let average = total / grades.length;
    return average;
  }

  let studentGrades = [85, 88, 70, 92, 90];
  let averageGrade = calculateAverageGrade(studentGrades);
  console.log(`The average grade is ${averageGrade}`); 

  //4. Display each student's name and average grade. Iterate through the students array,calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.


  function calculateAverageGrd(grades: number[]): number {
    if (grades.length === 0) {
      return 0;
    }

    let total = 0;
    for (let i = 0; i < grades.length; i++) {
      total += grades[i];
    }

    let average = total / grades.length;
    return average;
  };

  let Students = [
    {name: "Abeha", grades:  [90,80,85,70,75]},
    {name: "Unzila", grades: [90,70,60,80,92] },
    {name: "Bisma", grades: [78,80,90,95,85] },
  ];

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let averageGrade = calculateAverageGrd(student.grades);
    console.log(`${student.name}'s average grade is ${averageGrade}`);
  };
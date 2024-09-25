function calculateStudentGrade(score) {
    let grade = '';
    switch (true) {
        case (score >= 0 && score <= 30): grade = 'C'; break;
        case (score >= 31 && score <= 60): grade = 'B'; break;
        case (score >= 61): grade = 'A'; break;
        default: console.log("Invalid input");
    }
    console.log("Grade is: " + grade);
}

let score = 'hello'
calculateStudentGrade(score);
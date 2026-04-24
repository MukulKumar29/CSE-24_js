 function calculateResult() {
    const n = parseInt(document.getElementById("subjects").value); 

    let total = 0;
    for (let i = 0; i < n; i++) {
        let x = parseFloat(prompt("Enter the subject's marks " + (i + 1)));
        total += x;
    }

    let avg = total / n;
    let grade;

    if (avg >= 90) {
        grade = "A+";
    } else if (avg >= 80 && avg < 90) {
        grade = "B+";
    } else if (avg >= 70 && avg < 80) {
        grade = "C+";
    } else if (avg >= 60 && avg < 70) {
        grade = "D+";
    } else {
        grade = "E";
    }

    let r;
    if (avg >= 40) {
        r = "PASS";
    } else {
        r = "FAIL";
    }

    document.getElementById("Result").innerHTML =
        "TOTAL MARKS: " + total + "<br>" +
        "AVERAGE MARKS: " + avg + "<br>" +
        "GRADE: " + grade + "<br>" +
        "RESULT: " + r;
}
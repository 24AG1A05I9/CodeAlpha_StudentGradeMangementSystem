let students = [];

function addStudent() {

    let name =
        document.getElementById("studentName").value;

    let grade =
        parseFloat(
            document.getElementById("studentGrade").value
        );

    if (name === "" || isNaN(grade)) {
        alert("Please enter valid data");
        return;
    }

    students.push({
        name: name,
        grade: grade
    });

    let table =
        document.getElementById("studentTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = grade;

    document.getElementById("studentName").value = "";
    document.getElementById("studentGrade").value = "";
}

function generateReport() {

    if (students.length === 0) {
        alert("No student records found");
        return;
    }

    let total = 0;

    let highest = students[0].grade;
    let lowest = students[0].grade;

    for (let i = 0; i < students.length; i++) {

        total += students[i].grade;

        if (students[i].grade > highest) {
            highest = students[i].grade;
        }

        if (students[i].grade < lowest) {
            lowest = students[i].grade;
        }
    }

    let average =
        (total / students.length).toFixed(2);

    document.getElementById("report").innerHTML =
        "<h2>Summary Report</h2>" +
        "<p>Total Students: " + students.length + "</p>" +
        "<p>Average Score: " + average + "</p>" +
        "<p>Highest Score: " + highest + "</p>" +
        "<p>Lowest Score: " + lowest + "</p>";
}
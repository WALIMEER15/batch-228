// ===============================
// Attendance Salary Calculator
// Part 3A
// ===============================

// Table Body
const attendanceBody = document.getElementById("attendanceBody");

// Month Days
const monthDays = document.getElementById("monthDays");

// Buttons
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

// ===============================
// Create Attendance Table
// ===============================

function createAttendanceTable(days) {

    attendanceBody.innerHTML = "";

    for (let i = 1; i <= days; i++) {

        attendanceBody.innerHTML += `

        <tr>

            <td>Day ${i}</td>

            <td>
                <input
                type="time"
                id="timeIn${i}">
            </td>

            <td>
                <input
                type="time"
                id="timeOut${i}">
            </td>

            <td id="workedHours${i}">
                0 Hours
            </td>

        </tr>

        `;

    }

}

// ===============================
// Default Table
// ===============================

createAttendanceTable(30);

// ===============================
// Change Month Days
// ===============================

monthDays.addEventListener("change", function () {

    createAttendanceTable(Number(this.value));

});

// ===============================
// Time To Minutes
// ===============================

function convertTimeToMinutes(time) {

    if (time == "") {

        return 0;

    }

    let splitTime = time.split(":");

    let hour = Number(splitTime[0]);

    let minute = Number(splitTime[1]);

    return (hour * 60) + minute;

}

// ===============================
// Calculate Button
// ===============================

calculateBtn.addEventListener("click", function () {

    let totalDays = Number(monthDays.value);

    let totalWorkedMinutes = 0;

    for (let i = 1; i <= totalDays; i++) {

        let inTime = document.getElementById("timeIn" + i).value;

        let outTime = document.getElementById("timeOut" + i).value;

        if (inTime == "" || outTime == "") {

            continue;

        }

        let inMinutes = convertTimeToMinutes(inTime);

        let outMinutes = convertTimeToMinutes(outTime);

        let workedMinutes = 0;

        // Night Shift Support
        if (outMinutes < inMinutes) {

            workedMinutes = (24 * 60 - inMinutes) + outMinutes;

        } else {

            workedMinutes = outMinutes - inMinutes;

        }

        totalWorkedMinutes += workedMinutes;

        let workedHours = (workedMinutes / 60).toFixed(2);

        document.getElementById("workedHours" + i).innerHTML =
            workedHours + " Hours";

    }

    document.getElementById("workedHours").innerHTML =
        (totalWorkedMinutes / 60).toFixed(2);

    document.getElementById("workedMinutes").innerHTML =
        totalWorkedMinutes;

});

// ===============================
// Reset Button
// ===============================

resetBtn.addEventListener("click", function () {

    createAttendanceTable(Number(monthDays.value));

});

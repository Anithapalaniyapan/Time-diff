function calculateTimeDifference() {
  var startTime = document.getElementById("startTime").value;
  var endTime = document.getElementById("endTime").value;
  var startHours = parseInt(startTime.split(":")[0]);
  var startMinutes = parseInt(startTime.split(":")[1]);
  var endHours = parseInt(endTime.split(":")[0]);
  var endMinutes = parseInt(endTime.split(":")[1]);
  var timeDifferenceHours = endHours - startHours;
  var timeDifferenceMinutes = endMinutes - startMinutes;
  if (timeDifferenceMinutes < 0) {
    timeDifferenceHours--;
    timeDifferenceMinutes += 60;
  }
  document.getElementById("result").innerHTML =
    "Time Difference: " +
    timeDifferenceHours +
    " hours and " +
    timeDifferenceMinutes +
    " minutes";
}

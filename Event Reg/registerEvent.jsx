<!DOCTYPE html>
<html>
<head>
  <title>Event Registration</title>
</head>
<body>

<h2>Event Registration System</h2>
<button onclick="registerEvent()">Register for Event</button>

<script>
function registerEvent() {

  // Get participant name
  var name = prompt("Enter Participant Name:");
  if (name === null || name === "") {
    alert("Registration cancelled! Name is required.");
    return;
  }

  // Get event name
  var eventName = prompt("Enter Event Name:");
  if (eventName === null || eventName === "") {
    alert("Registration cancelled! Event name is required.");
    return;
  }

  // Get contact number
  var contact = prompt("Enter Contact Number:");
  if (contact === null || contact === "" || isNaN(contact)) {
    alert("Invalid contact number!");
    return;
  }

  // Confirmation dialog
  var confirmRegistration = confirm(
    "Participant Name: " + name +
    "\nEvent Name: " + eventName +
    "\nContact Number: " + contact +
    "\n\nDo you want to confirm registration?"
  );

  // Final alert
  if (confirmRegistration) {
    alert("✅ Registration Successful!\nThank you for registering, " + name + " 🎊");
  } else {
    alert("❌ Registration Cancelled.");
  }
}
</script>

</body>
</html>

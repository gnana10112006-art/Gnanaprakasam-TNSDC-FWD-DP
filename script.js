document.getElementById("admissionForm").addEventListener("submit", function(e) {

  e.preventDefault();

  // Collect values

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  let course = document.getElementById("course").value;

  // Simple validation

  if (name && email && phone && course) {

    document.getElementById("message").style.color = "green";

    document.getElementById("message").innerText = "Form submitted successfully!";

    this.reset();

  } else {

    document.getElementById("message").style.color = "red";

    document.getElementById("message").innerText = "Please fill all fields properly!";

  }

});
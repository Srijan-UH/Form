document.getElementById("submitButton").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
  
    if (name && email && phone && dob && gender) {
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <h2>Registration Successful!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
      `;
      outputDiv.style.display = "block";
    } else {
      alert("Please fill out all the fields!");
    }
  });
  
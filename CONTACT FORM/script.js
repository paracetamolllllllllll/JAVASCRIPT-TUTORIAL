document.getElementById("feedback").addEventListener("submit", function(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("Phonenumber").value;
    const message = document.getElementById("Message").value;

    const output = `
        <h2>Submitted Information:</h2>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    const resultDiv = document.getElementById("form-result");
    resultDiv.innerHTML = output;
});

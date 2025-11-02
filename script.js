// Array to store all user data
let users = [];

// Get DOM elements
const form = document.getElementById("signupForm");
const saveBtn = document.getElementById("saveBtn");
const tableBody = document.querySelector("#dataTable tbody");

// Function to add a new user
function addUser() {
  // Store user input
  const user = {
    idNumber: document.getElementById("idNumber").value,
    firstName: document.getElementById("firstName").value,
    middleName: document.getElementById("middleName").value,
    lastName: document.getElementById("lastName").value,
    gender: document.getElementById("gender").value,
    birthday: document.getElementById("birthday").value,
  };

  // Validation
  if (!user.idNumber || !user.firstName || !user.lastName || !user.gender || !user.birthday) {
    alert("Please fill out all required fields!");
    return;
  }

  // Add user to array
  users.push(user);

  // Update the table
  displayUsers();

  // Reset form
  form.reset();

  // Change background color briefly as feedback
  document.body.style.backgroundColor = "#d1fae5";
  setTimeout(() => {
    document.body.style.backgroundColor = "#f3f4f6";
  }, 500);
}

// Function to display all users in the table
function displayUsers() {
  // Clear current rows
  tableBody.innerHTML = "";

  // Add each user to table
  users.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.idNumber}</td>
      <td>${user.firstName}</td>
      <td>${user.middleName}</td>
      <td>${user.lastName}</td>
      <td>${user.gender}</td>
      <td>${user.birthday}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Event listener for Save button
saveBtn.addEventListener("click", addUser);

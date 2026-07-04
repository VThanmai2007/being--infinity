
const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "./images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "./images/john.png"
  }
];

let curUserId = 0;

// Toggle between Jane and John
function toggle() {
  console.log("Toggle");

  if (curUserId === 0) {
    curUserId = 1;
  } else {
    curUserId = 0;
  }

  // Update image
  document.getElementById("user-card-image").src = users[curUserId].image;

  // Update name
  document.getElementById("card-name").innerText = users[curUserId].name;

  // Update gender
  document.getElementById("card-gender").innerText = users[curUserId].gender;
}

console.log("Hello from JS");

// Get Random User
function getRandomUser() {
  fetch("https://randomuser.me/api/")
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedData) {

      let user = parsedData.results[0];

      let gender = user.gender;
      let name = user.name.first + " " + user.name.last;
      let imageUrl = user.picture.large;

      // Update gender
      document.getElementById("card-gender").innerText = gender;

      // Update name
      document.getElementById("card-name").innerText = name;

      // Update image
      document.getElementById("user-card-image").src = imageUrl;
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
}

// Button Events
document
  .getElementById("card-toggle-btn")
  .addEventListener("click", toggle);

document
  .getElementById("random-btn")
  .addEventListener("click", getRandomUser);
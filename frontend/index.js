
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

let currentUser = 0;

// Display User
function displayUser(user) {
    document.getElementById("img").src = user.image;
    document.getElementById("card-name").innerText = user.name;
    document.getElementById("card-gender").innerText = user.gender;
}

// Toggle User
function toggle() {
    currentUser = (currentUser + 1) % users.length;
    displayUser(users[currentUser]);
}

// Get Random User
function getRandomUser() {

    fetch("https://randomuser.me/api/")
        .then(function(response){
            return response.json();
        })
        .then(function(data){

            let user = data.results[0];

            document.getElementById("img").src = user.picture.large;
            document.getElementById("card-name").innerText =
                user.name.first + " " + user.name.last;
            document.getElementById("card-gender").innerText =
                user.gender;
        })
        .catch(function(error){
            console.log(error);
        });
}

// Show Jane on page load
displayUser(users[currentUser]);

console.log("JavaScript Loaded Successfully");
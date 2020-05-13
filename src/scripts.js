var infoCard = document.querySelector('.info-card');
var welcomeMessage = document.querySelector('.welcome-message');
var compareStep = document.querySelector('.compare-step')


let userRepo = new UserRepository(userData);
let user = new User()

window.onload = displayData()

function displayData() {
makeUser();
  displayUserInfo();
  welcomeMessageOnLoad();
//   populateFriends();
//   compareStepGoals();

}

function makeUser() {
    let randomUser = Math.floor(Math.random() * userData.length);
    user = new User(userData[randomUser])
  }

function displayUserInfo() {
    infoCard.innerhtml = 
    `<p>${user.name}</p>
    <p>${user.address}</p>
    <p>${user.email}</p>
    <p>${user.strideLength}</p>
    <p>${user.dailyStepGoal}</p>`
}

function welcomeMessageOnLoad() {
    welcomeMessage.innerText = `Welcome to Fitlit ${user.returnFirstName()}!`
}

function compareStepGoals() {

}
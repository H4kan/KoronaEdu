
const users = [{user: "Alpha", clicked: 0, missed: 0, points: 0},
{user: "Beta", clicked: 0, missed: 0, points: 0},
{user: "Gamma", clicked: 0, missed: 0, points: 0},
{user: "Delta", clicked: 0, missed: 0, points: 0}];

const studentList = document.querySelectorAll(".userVideo .student");

updateUsers = () => {
for (let i = 0; i < users.length; i++) {
    users[i].points = users[i].clicked;
    studentList[i].querySelector('.name').textContent = users[i].user;
    studentList[i].querySelector('.result').textContent = users[i].points;
    }
}

const screenEl = document.querySelector(".screen");
const clicker = document.createElement("div");
clicker.classList.add("clicker");
screenEl.appendChild(clicker);



updateUsers();
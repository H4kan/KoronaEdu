
const clickerLifetime = 5000;
const users = [{user: "Alpha", clicked: 0, missed: 0, points: 0},
{user: "Beta", clicked: 0, missed: 0, points: 0},
{user: "Gamma", clicked: 0, missed: 0, points: 0},
{user: "Delta", clicked: 0, missed: 0, points: 0}];

const studentList = document.querySelectorAll(".userVideo .student");

updateUsers = () => {
for (let i = 0; i < users.length; i++) {
    studentList[i].querySelector('.name').textContent = users[i].user;
    studentList[i].querySelector('.result').textContent = users[i].points;
    }
}
function updateScore(){
	let q=document.querySelector("#1 .result");
	q.innerHTML=users[0].clicked;
}
const screenEl = document.querySelector(".screen");
const clicker = document.createElement("div");
clicker.classList.add("clicker");
screenEl.appendChild(clicker);

initializeClicker = () => {
    const firstPos = 50 + Math.random() * (screenEl.offsetHeight * 3 / 4  - 100 - clicker.offsetHeight / 2);
    const secondPos = 50 + Math.random() * (screenEl.offsetWidth - 100 - clicker.offsetWidth / 2);
    let clicked = false;
    clicker.style.top = firstPos + "px";
    clicker.style.left = secondPos + "px";
    clicker.classList.remove("clicked")
    clicker.style.display = "block";
    setTimeout(() => {
        if (!clicker.classList.contains("clicked")) {
			users[0].missed++; 
			clicker.classList.add("clicked");
        }
        else {
			users[0].clicked++;
			updateScore();
		}
    }, clickerLifetime);
	possibility();
}

clickerHandler = () => {
    clicker.classList.add("clicked");
}

clicker.addEventListener("click", clickerHandler);

updateUsers();
function possibility(){
	setInterval(function(){
		initializeClicker();
	}, clickerLifetime*2);
}


const clickerLifetime = 5000;
const clickerMaxTimespan = 30000;
const clickerAppearTime = 10000;

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
        else {users[0].clicked++;}
        updateUsers();
    }, clickerLifetime);
}

clickerHandler = () => {
    clicker.classList.add("clicked");
}

clicker.addEventListener("click", clickerHandler);

handRaised = () => {
    studentList[0].style.border = "2px solid #b2c52e";
    if (chatUl.childElementCount == maxChatMessagesCount) {
        chatUl.removeChild(document.querySelector(".chat li:first-child"));
    }
    const liEl = document.createElement("li");
    liEl.textContent = users[0].user + " podnosi rękę!";
    liEl.style.color = "#b2c52e";
    chatUl.appendChild(liEl);
    setTimeout(() => {
        studentList[0].style.border = "1px solid rgba(0,0,0,.4)";
    }, 5000)
}

const handRaiseBtn = document.querySelector(".handRaise");

clickerRecursive = () => {
    initializeClicker();
    setTimeout(clickerRecursive, Math.floor(Math.random() * clickerMaxTimespan));
}

setTimeout(clickerRecursive, clickerAppearTime);
handRaiseBtn.addEventListener("click", handRaised)
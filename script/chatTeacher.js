const maxChatMessagesCount = 15;
const chatUl = document.querySelector(".chat ul");
const arrowBtn = document.querySelector("button.arrow");
const inputEl = document.querySelector(".chatInput input");

createMessage = (user, textValue, permissions=0) => {
    if (chatUl.childElementCount == maxChatMessagesCount) {
        chatUl.removeChild(document.querySelector(".chat li:first-child"));
    }
    const liEl = document.createElement("li");
    const nameEl = document.createElement("span");
    const textEl = document.createElement("span");
    if (permissions == 1) nameEl.style.color = "#b2c52e";
    liEl.appendChild(nameEl);
    liEl.appendChild(textEl);
    nameEl.textContent = user + ":  ";
    textEl.textContent = textValue;
    chatUl.appendChild(liEl);
}

sendMessageTeacher = () => {
    const name = inputEl.value;
    const user = "Iwona";
    createMessage(user, name, 1);
}

arrowBtn.addEventListener("click", () => {
if (inputEl.value) sendMessageTeacher();
    inputEl.value = "";
});
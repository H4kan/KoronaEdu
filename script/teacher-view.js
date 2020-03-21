
const endLessonBtn = document.querySelector(".userVideo:nth-child(1)");


endLesson = () => {
    const pEl = document.createElement("p");
    pEl.textContent = "Zakończono lekcję";
    screenEl.appendChild(pEl);
    screenEl.classList.add("disabled")
}

endLessonBtn.addEventListener("click", endLesson);
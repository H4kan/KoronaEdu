
const pencilWeight = 5;
const rubberWeight = 10;

const endLessonBtn = document.querySelector(".userVideo button:nth-child(1)");
const pointControlBtn = document.querySelector(".userVideo button:last-child");
const openTableBtn = document.querySelector(".screenBox .openTable");
const windowInfo = document.querySelector(".screenBox p");
const toolbarEl = document.querySelector(".screen .toolbar")
const pencilBtn = document.querySelector(".screen .toolbar .pencil");
const rubberBtn = document.querySelector(".screen .toolbar .rubber");
const screenBoxEl = document.querySelector(".screenBox");
const canvas = document.querySelector(".screen canvas");
const canvasCtx = canvas.getContext("2d");

let pencilInterval;
let rubberInterval;

canvasCtx.shadowBlur = 0;
endLesson = () => {
    const pEl = document.createElement("p");
    pEl.textContent = "Zakończono lekcję";
    screenEl.appendChild(pEl);
    screenEl.classList.add("disabled");
}

switchPointControl = () => {
    if (pointControlBtn.classList.contains("active")) {
        pointControlBtn.textContent = "Włącz punkty"
        pointControlBtn.classList.remove("active");
    }
    else {
        pointControlBtn.classList.add("active");
        pointControlBtn.textContent = "Wyłącz punkty"
    }
}


openTable = () => {
    if (openTableBtn.classList.contains("active")) {
        openTableBtn.classList.remove("active");
        openTableBtn.textContent = "Otwórz tablicę";
        windowInfo.textContent = "Ekran";
        toolbarEl.classList.remove("active");
        screenEl.removeEventListener("mousedown", rubberWriting);
        screenEl.removeEventListener("mouseup", rubberNotWriting);
        screenEl.removeEventListener("mousedown", pencilWriting);
        screenEl.removeEventListener("mouseup", pencilNotWriting);
    } else {
        windowInfo.textContent = "Tablica";
        openTableBtn.textContent = "Zamknij tablicę";
        openTableBtn.classList.add("active");
        toolbarEl.classList.add("active");
    }
}


pencilWriting = (e) => {
    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect((e.clientX - screenBoxEl.offsetLeft - screenEl.offsetLeft) * canvas.width / canvas.offsetWidth, (e.clientY - screenBoxEl.offsetTop - screenEl.offsetTop - 15) * canvas.height / canvas.offsetHeight, pencilWeight, pencilWeight);
    canvasCtx.stroke();
}
pencilListening = () => {
    if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
        }
        document.onmousemove = pencilWriting;
}


pencilNotWriting = () => {
    document.onmousemove = "";
}

rubberWriting = (e) => {
    canvasCtx.fillStyle = "white";
    canvasCtx.fillRect((e.clientX - screenBoxEl.offsetLeft - screenEl.offsetLeft) * canvas.width / canvas.offsetWidth, (e.clientY - screenBoxEl.offsetTop - screenEl.offsetTop - 15) * canvas.height / canvas.offsetHeight, rubberWeight, rubberWeight);
    canvasCtx.stroke();
}

rubberListening = () => {
    if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
        }
        document.onmousemove = rubberWriting;
}

rubberNotWriting = () => {
    document.onmousemove = "";
}

pencilActivation = () => {
    pencilBtn.classList.toggle("active");
    if (pencilBtn.classList.contains("active")) {
        rubberBtn.classList.remove("active");
        screenEl.removeEventListener("mousedown", rubberListening);
        screenEl.removeEventListener("mouseup", rubberNotWriting);
        screenEl.addEventListener("mousedown", pencilListening);
        screenEl.addEventListener("mouseup", pencilNotWriting);
    }
    else {
        screenEl.removeEventListener("mousedown", pencilListening);
        screenEl.removeEventListener("mouseup", pencilNotWriting);
    }
}

rubberActivation = () => {
    rubberBtn.classList.toggle("active");
    if (rubberBtn.classList.contains("active")) {
        pencilBtn.classList.remove("active");
        screenEl.removeEventListener("mousedown", pencilListening);
        screenEl.removeEventListener("mouseup", pencilNotWriting);
        screenEl.addEventListener("mousedown", rubberListening);
        screenEl.addEventListener("mouseup", rubberNotWriting);
    }
    else {
        screenEl.removeEventListener("mousedown", rubberListening);
        screenEl.removeEventListener("mouseup", rubberNotWriting);
    }
}

pointControlBtn.addEventListener("click", switchPointControl);
endLessonBtn.addEventListener("click", endLesson);
openTableBtn.addEventListener("click", openTable);

pencilBtn.addEventListener("click", pencilActivation);
rubberBtn.addEventListener("click", rubberActivation);
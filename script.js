const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskTime = document.getElementById("taskTime");
const taskList = document.getElementById("taskList");
const alarmSound = document.getElementById("alarmSound");

let tasks = [];
let speakingInterval = null;

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const taskDateTime = new Date(taskTime.value);

    if (!taskText || isNaN(taskDateTime)) {
        alert("Please enter both task and time!");
        return;
    }

    const task = { text: taskText, time: taskDateTime, done: false };
    tasks.push(task);
    displayTasks();
    taskInput.value = "";
    taskTime.value = "";
});

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task";
        li.innerHTML = `
            <span>${task.text} <br><small>${task.time.toLocaleString()}</small></span>
            <div>
                <button class="stop-btn" onclick="stopSpeaking()">🛑 Stop</button>
                <button onclick="deleteTask(${index})">❌</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function checkAlarms() {
    const now = new Date();
    tasks.forEach((task) => {
        if (!task.done && Math.abs(now - task.time) < 1000) {
            startAlarm(task.text);
            task.done = true; // prevent repeating trigger
        }
    });
}

function startAlarm(taskText) {
    alarmSound.play();
    speakTask(taskText);

    // Repeat speech every 5 seconds until stopped manually
    speakingInterval = setInterval(() => {
        alarmSound.play();
        speakTask(taskText);
    }, 5000);
}

function speakTask(text) {
    const speech = new SpeechSynthesisUtterance(`Reminder: ${text}`);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

function stopSpeaking() {
    if (speakingInterval) {
        clearInterval(speakingInterval);
        speakingInterval = null;
    }
    window.speechSynthesis.cancel();
    alarmSound.pause();
    alarmSound.currentTime = 0;
}


setInterval(checkAlarms, 1000);

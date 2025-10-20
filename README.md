🕒 To-Do List with Alarm & Voice Reminder

A simple To-Do List Web App built using HTML, CSS, and JavaScript.
This app lets users add tasks with a specific time, and when the time comes, it plays an alarm sound 🔔 and repeatedly speaks the task aloud 🗣️ until stopped manually.

🚀 Features

✅ Add Tasks — Add tasks with a title and a date/time.
✅ Alarm Notification — Rings a sound at the exact task time.
✅ Voice Reminder — Speaks the task out loud using the browser’s Speech API.
✅ Repeating Alarm — Keeps speaking and ringing every few seconds until manually stopped.
✅ Manual Stop Button — Stop the speech and alarm any time with one click.
✅ Responsive UI — Clean and modern interface that works on all devices.
✅ Separate Files — Project organized into separate HTML, CSS, and JS files.

🧩 File Structure
📁 ToDoList-Alarm
│
├── index.html        # Main HTML structure
├── style.css         # Styling (background, layout, buttons, etc.)
├── script.js         # Functionality (alarm, speech, stop, etc.)
└── README.md         # Project documentation

🛠️ Technologies Used

HTML5 → Structure of the page

CSS3 → Styling and layout

JavaScript (Vanilla) → Logic for adding tasks, alarms, and speech

Web Speech API → For voice announcements

HTML Audio → For alarm sound

🎨 Background & UI

A dark-themed notebook-style background gives the page a realistic feel:

background-image: url("https://img.freepik.com/free-photo/top-view-list-written-black-notebook-black-table-free-space_140725-142507.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;


The task container is semi-transparent for a clean look.

💻 How to Run

Download or clone this repository:

git clone https://github.com/yourusername/ToDoList-Alarm.git


Open the folder.

Double-click on index.html to open it in your browser.

Add tasks with a time → wait until the time → hear and see the alarm in action!

📷 Preview

(You can include a screenshot here, e.g. screenshot.png)

⚙️ How It Works

User adds a task with a name and time.

JavaScript checks every second if the task time matches the current time.

When matched:

The app plays a sound.

The app speaks the task aloud.

It repeats every few seconds until the user clicks 🛑 Stop.

The user can delete any task or stop the current alarm.

🔊 Example Voice Output

“Reminder: Submit project report”
(repeats until stopped)

🧠 Future Improvements

Save tasks in localStorage (so they remain after refresh).

Option to snooze the alarm.

Add priority levels or categories.

Notification support even when tab is inactive.

👨‍💻 Author

Bankal Mavi

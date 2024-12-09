//Reminder App working version 1.0 (frontend only)


//Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBrBT42Yn4nmQ5EHzzZMLN4JJKiV4UbJD4",
    authDomain: "reminder-app-81d22.firebaseapp.com",
    databaseURL: "https://reminder-app-81d22-default-rtdb.firebaseio.com/",
    projectId: "reminder-app-81d22",
    storageBucket: "reminder-app-81d22.firebasestorage.app",
    messagingSenderId: "37109372943",
    appId: "1:37109372943:web:28bf06121469faab47ab7a",
    measurementId: "G-3XZCVNSRF9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Reminder class to manage reminders
class Reminder {
    constructor(comment, datetime, frequency, disableTime = null) {
        this.comment = comment;
        this.datetime = new Date(datetime);
        this.frequency = frequency; // Frequency in minutes
        this.disableTime = disableTime ? new Date(disableTime) : null;
    }
}


// Firebase Realtime Database operations
const remindersRef = ref(db, "reminders");

// Загрузка напоминаний из Firebase
onValue(remindersRef, (snapshot) => {
    const data = snapshot.val();
    reminders.length = 0; // Очистка локального массива

    for (const key in data) {
        const reminder = {
            ...data[key],
            datetime: new Date(data[key].datetime),
            disableTime: data[key].disableTime ? new Date(data[key].disableTime) : null,
            key,
        };
        reminders.push(reminder);
        scheduleReminder(reminder); // Перезапуск таймеров для загруженных напоминаний
    }

    updateReminderList(); // Обновление UI
});

// Array to store reminders
const reminders = [];

// Selectors for popup and buttons
const popup = document.getElementById("popup");
const saveReminderBtn = document.getElementById("save-reminder");
const closePopupBtn = document.getElementById("close-popup");
const newReminderBtn = document.getElementById("new-reminder-btn");
const frequencySelect = document.getElementById("frequency");
const customMinutesField = document.getElementById("custom-frequency");
const customMinutesInput = document.getElementById("custom-minutes");
const disableCheckbox = document.getElementById("disable-time-checkbox");
const disableDatetimeField = document.getElementById("disable-datetime-container");
const reminderList = document.getElementById("reminder-items");

// Current editing reminder (if any)
let editingReminder = null;

// Open popup
newReminderBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
    clearPopupFields();
    editingReminder = null;
});

// Close popup
closePopupBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// Show/hide custom frequency field
frequencySelect.addEventListener("change", () => {
    if (frequencySelect.value === "custom") {
        customMinutesField.classList.remove("hidden");
    } else {
        customMinutesField.classList.add("hidden");
    }
});

// Show/hide disable datetime field
disableCheckbox.addEventListener("change", () => {
    // Когда чекбокс включен, показываем поле для даты выключения, иначе скрываем его
    if (disableCheckbox.checked) {
        disableDatetimeField.classList.remove("hidden");
    } else {
        disableDatetimeField.classList.add("hidden");
    }
});

// Функция для остановки запланированных таймеров
function clearReminderTimers(reminder) {
    if (reminder.timeoutId) {
        clearTimeout(reminder.timeoutId);
        reminder.timeoutId = null;
    }
}

// Save reminder
saveReminderBtn.addEventListener("click", () => {
    const comment = document.getElementById("comment").value;
    const datetime = document.getElementById("reminder-datetime").value;
    const frequency =
        frequencySelect.value === "custom"
            ? parseInt(customMinutesInput.value) || 60
            : parseInt(frequencySelect.value);
    const disableTime = disableCheckbox.checked
        ? document.getElementById("disable-datetime").value
        : null;

    if (!comment || !datetime) return alert("Please fill in all required fields.");

    if (editingReminder) {
        // Обновление существующего напоминания
        const reminderKey = editingReminder.key;

        const updatedReminder = {
            comment,
            datetime: new Date(datetime).toISOString(),
            frequency,
            disableTime: disableTime ? new Date(disableTime).toISOString() : null,
        };

        set(ref(db, `reminders/${reminderKey}`), updatedReminder)
            .then(() => {
                console.log("Reminder updated successfully");
                editingReminder = null; // Сброс редактируемого напоминания
                popup.classList.add("hidden");
            })
            .catch((error) => console.error("Error updating reminder:", error));
    } else {
        // Создание нового напоминания
        const newReminderRef = push(remindersRef);
        const newReminder = {
            comment,
            datetime: new Date(datetime).toISOString(),
            frequency,
            disableTime: disableTime ? new Date(disableTime).toISOString() : null,
        };

        set(newReminderRef, newReminder)
            .then(() => {
                console.log("New reminder saved successfully");
                popup.classList.add("hidden");
            })
            .catch((error) => console.error("Error saving reminder:", error));
    }
});


// Schedule reminders
function scheduleReminder(reminder) {
    const now = new Date();

    // Если время напоминания уже прошло, пропускаем его
    const timeDiff = reminder.datetime - now;
    if (timeDiff <= 0) {
        reminder.datetime = new Date(now.getTime() + reminder.frequency * 60000);
    }

    // Проверка времени выключения, если оно задано
    if (reminder.disableTime && now >= reminder.disableTime) {
        removeReminder(reminder);
        return;
    }

    // Устанавливаем таймер
    reminder.timeoutId = setTimeout(() => {
        // Отображаем уведомление
        showNotification(reminder.comment);

        // Проверяем, нужно ли остановить напоминание
        if (reminder.disableTime && new Date() >= reminder.disableTime) {
            removeReminder(reminder);
            return;
        }

        // Устанавливаем новое время напоминания
        reminder.datetime = new Date(
            reminder.datetime.getTime() + reminder.frequency * 60000
        );

        // Перезапускаем напоминание
        scheduleReminder(reminder);
        updateReminderInDOM(reminder);
    }, timeDiff);
}

// Измененная функция удаления напоминания
function removeReminder(reminder) {
    const reminderKey = reminder.key;

    set(ref(db, `reminders/${reminderKey}`), null)
        .then(() => console.log("Reminder deleted successfully"))
        .catch((error) => console.error("Error deleting reminder:", error));
}


// Функция обновления элемента списка напоминаний
function updateReminderInDOM(reminder) {
    const index = reminders.indexOf(reminder);
    if (index !== -1) {
        const listItem = reminderList.children[index];

        const now = new Date();
        const timeDiff = reminder.datetime - now;
        const timeLeft = formatTimeLeft(timeDiff);

        // Обновляем содержимое элемента списка
        listItem.innerHTML = `
            <div class="reminder-details">
                <div class="comment">${reminder.comment}</div>
                <div class="time">Next reminder: ${reminder.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${timeLeft}</div>
                ${
                    reminder.disableTime
                        ? `<div class="disable-time">Disable at: ${reminder.disableTime.toLocaleString()}</div>`
                        : ""
                }
            </div>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        // Добавляем обработчики кнопок
        listItem.querySelector(".edit-btn").addEventListener("click", () => {
            editReminder(reminder);
        });
        listItem.querySelector(".delete-btn").addEventListener("click", () => {
            removeReminder(reminder);
        });
    }
}



// Функция удаления напоминания
// function removeReminder(reminder) {
//     const index = reminders.indexOf(reminder);
//     if (index !== -1) {
//         clearReminderTimers(reminder);
//         reminders.splice(index, 1); // Удаляем напоминание из массива
//         updateReminderList(); // Обновляем список
//     }
// }

// Show Windows notification
function showNotification(message) {
    if (Notification.permission === "granted") {
        new Notification("Reminder", { body: message });
    } else if (Notification.permission === "default") {
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification("Reminder", { body: message });
            } else {
                console.warn("Notifications denied by the user.");
            }
        });
    } else {
        console.warn("Notifications are blocked. Please enable them in your browser settings.");
    }
}

// Update the reminder list in the UI
// Обновление списка напоминаний, добавляем все параметры сразу
function updateReminderList() {
    reminderList.innerHTML = ""; // Очистка интерфейса

    reminders.forEach((reminder, index) => {
        const now = new Date();
        const timeDiff = reminder.datetime - now;
        const timeLeft = formatTimeLeft(timeDiff);

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="reminder-details">
                <div class="comment">${reminder.comment}</div>
                <div class="time">Next reminder: ${reminder.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${timeLeft}</div>
                ${
                    reminder.disableTime
                        ? `<div class="disable-time">Disable at: ${reminder.disableTime.toLocaleString()}</div>`
                        : ""
                }
            </div>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        reminderList.appendChild(listItem);

        // Привязка кнопок к соответствующим действиям
        listItem.querySelector(".edit-btn").addEventListener("click", () => {
            editReminder(reminder);
        });
        listItem.querySelector(".delete-btn").addEventListener("click", () => {
            removeReminder(reminder);
        });
    });
}


// Edit reminder
function editReminder(reminder) {
    editingReminder = reminder;

    document.getElementById("comment").value = reminder.comment;
    document.getElementById("reminder-datetime").value = reminder.datetime
        .toISOString()
        .slice(0, 16);

    if (reminder.frequency !== 60 && reminder.frequency !== 120) {
        frequencySelect.value = "custom";
        customMinutesField.classList.remove("hidden");
        customMinutesInput.value = reminder.frequency;
    } else {
        frequencySelect.value = reminder.frequency.toString();
        customMinutesField.classList.add("hidden");
    }

    disableCheckbox.checked = !!reminder.disableTime;
    document.getElementById("disable-datetime").value = reminder.disableTime
        ? reminder.disableTime.toISOString().slice(0, 16)
        : "";

    popup.classList.remove("hidden");
}

// Format time left
function formatTimeLeft(timeDiff) {
    const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
}

// Clear popup fields
function clearPopupFields() {
    document.getElementById("comment").value = "";
    document.getElementById("reminder-datetime").value = "";
    frequencySelect.value = "60";
    customMinutesField.classList.add("hidden");
    customMinutesInput.value = "";
    disableCheckbox.checked = false;
    disableDatetimeField.classList.add("hidden");
    document.getElementById("disable-datetime").value = "";
}
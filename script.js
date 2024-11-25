// Reminder class to manage reminders
class Reminder {
    constructor(comment, datetime, frequency, disableTime = null) {
        this.comment = comment;
        this.datetime = new Date(datetime);
        this.frequency = frequency; // Frequency in minutes
        this.disableTime = disableTime ? new Date(disableTime) : null;
    }
}

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
    if (disableCheckbox.checked) {
        disableDatetimeField.classList.remove("hidden");
    } else {
        disableDatetimeField.classList.add("hidden");
    }
});

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
        editingReminder.comment = comment;
        editingReminder.datetime = new Date(datetime);
        editingReminder.frequency = frequency;
        editingReminder.disableTime = disableTime ? new Date(disableTime) : null;
    } else {
        // Создание нового напоминания
        const newReminder = new Reminder(comment, datetime, frequency, disableTime);
        reminders.push(newReminder);
        scheduleReminder(newReminder); // Запускаем срабатывание
    }

    updateReminderList(); // Обновляем список
    popup.classList.add("hidden"); // Закрываем попап
});

// Schedule reminders
function scheduleReminder(reminder) {
    const now = new Date();

    // Если время напоминания уже прошло, пропускаем его
    const timeDiff = reminder.datetime - now;
    if (timeDiff <= 0) return;

    // Проверка времени выключения, если оно задано
    if (reminder.disableTime && now >= reminder.disableTime) {
        removeReminder(reminder);
        return; // Прерываем выполнение, так как напоминание отключено
    }

    // Запускаем напоминание
    setTimeout(() => {
        groupAndShowNotifications(reminder);

        // Устанавливаем новое время напоминания на основе частоты
        reminder.datetime = new Date(reminder.datetime.getTime() + reminder.frequency * 60000);

        // Обновляем элемент в списке
        updateReminderInDOM(reminder);

        // Перезапускаем напоминание
        scheduleReminder(reminder);
    }, timeDiff);
}

// Update the reminder in the DOM
function updateReminderInDOM(reminder) {
    const index = reminders.indexOf(reminder);
    if (index !== -1) {
        const listItem = reminderList.children[index];
        
        const now = new Date();
        const timeDiff = reminder.datetime - now;
        const timeLeft = formatTimeLeft(timeDiff);
        
        // Обновление содержимого элемента списка
        listItem.innerHTML = `
            <div class="reminder-details">
                <div class="comment">${reminder.comment}</div>
                <div class="time">Next reminder: ${reminder.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${timeLeft}</div>
                ${reminder.disableTime ? `<div class="disable-time">Disable at: ${reminder.disableTime.toLocaleString()}</div>` : ''}
            </div>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        
        // Повторное добавление обработчиков кнопок
        listItem.querySelector(".edit-btn").addEventListener("click", () => {
            editReminder(reminder);
        });

        listItem.querySelector(".delete-btn").addEventListener("click", () => {
            removeReminder(reminder);
        });
    }
}


// Group notifications by time and show them
function groupAndShowNotifications(reminder) {
    const groupedReminders = groupRemindersByTime();
    const key = reminder.datetime.toISOString().slice(0, 16);

    if (groupedReminders[key]) {
        const messages = groupedReminders[key].map(
            (r, index) => `${index + 1}) ${r.comment}`
        );
        showNotification(messages.join("\n"));
    } else {
        showNotification(reminder.comment); // Для одиночных напоминаний
    }
}

// Group reminders by their datetime (ignoring seconds)
function groupRemindersByTime() {
    const grouped = {};

    reminders.forEach((reminder) => {
        const key = reminder.datetime.toISOString().slice(0, 16); // Group by date, hour, and minute (ignoring seconds)
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(reminder);
    });

    return grouped;
}

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
function updateReminderList() {
    reminderList.innerHTML = ""; // Clear the list

    reminders.forEach((reminder, index) => {
        const now = new Date();
        const timeDiff = reminder.datetime - now;
        const timeLeft = formatTimeLeft(timeDiff);

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="reminder-details">
                <div class="comment">${reminder.comment}</div>
                <div class="time">${reminder.datetime.toLocaleString()}</div>
                <div class="time-left">Time left: ${timeLeft}</div>
                ${reminder.disableTime ? `<div class="disable-time">Disable at: ${reminder.disableTime.toLocaleString()}</div>` : ''}
            </div>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        reminderList.appendChild(listItem);
    });

    document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            editReminder(reminders[index]);
        });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            removeReminder(reminders[index]);
        });
    });
}

// Edit reminder
function editReminder(reminder) {
    editingReminder = reminder;

    // Update the popup fields with reminder details
    document.getElementById("comment").value = reminder.comment;
    document.getElementById("reminder-datetime").value = reminder.datetime.toISOString().slice(0, 16);
    frequencySelect.value = reminder.frequency;
    customMinutesField.classList.add("hidden"); // Hide custom minutes input
    disableCheckbox.checked = reminder.disableTime ? true : false;
    disableDatetimeField.classList.toggle("hidden", !reminder.disableTime);
    if (reminder.disableTime) document.getElementById("disable-datetime").value = reminder.disableTime.toISOString().slice(0, 16);

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

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
const disableDatetimeField = document.getElementById("disable-datetime");
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
    disableDatetimeField.classList.toggle("hidden", !disableCheckbox.checked);
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
        editingReminder.comment = comment;
        editingReminder.datetime = new Date(datetime);
        editingReminder.frequency = frequency;
        editingReminder.disableTime = disableTime ? new Date(disableTime) : null;
    } else {
        const newReminder = new Reminder(comment, datetime, frequency, disableTime);
        reminders.push(newReminder);
        scheduleReminder(newReminder);
    }

    updateReminderList();
    popup.classList.add("hidden");
});

// Schedule reminders
function scheduleReminder(reminder) {
    const now = new Date();
    const timeDiff = reminder.datetime - now;
    if (timeDiff <= 0) return alert("Invalid reminder time.");

    setTimeout(() => {
        showNotification(reminder.comment);

        if (reminder.disableTime && new Date() >= reminder.disableTime) return;

        reminder.datetime = new Date(
            reminder.datetime.getTime() + reminder.frequency * 60000
        );
        scheduleReminder(reminder);
    }, timeDiff);
}

// Show Windows notification
function showNotification(message) {
    if (Notification.permission === "granted") {
        // Если разрешение уже предоставлено, сразу показываем уведомление
        new Notification("Reminder", { body: message });
    } else if (Notification.permission === "default") {
        // Если разрешение ещё не запрашивалось, запрашиваем его один раз
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                new Notification("Reminder", { body: message });
            } else {
                console.warn("Notifications denied by the user.");
            }
        });
    } else {
        // Если разрешение было отклонено, выводим сообщение в консоль
        console.warn("Notifications are blocked. Please enable them in your browser settings.");
    }
}

// Request notification permission on page load (optional)
document.addEventListener("DOMContentLoaded", () => {
    if (Notification.permission === "default") {
        Notification.requestPermission().catch((err) => {
            console.error("Notification permission request failed:", err);
        });
    }
});


// Update the reminder list in the UI
function updateReminderList() {
    reminderList.innerHTML = ""; // Clear the list

    reminders.forEach((reminder, index) => {
        const now = new Date();
        const timeDiff = reminder.datetime - now;
        const disableTime = reminder.disableTime
            ? `Until ${reminder.disableTime.toLocaleString()}`
            : "No limit";

        const timeLeft = formatTimeLeft(timeDiff);

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${reminder.comment} - ${reminder.datetime.toLocaleString()} - ${timeLeft} (${disableTime})
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        reminderList.appendChild(listItem);
    });

    // Attach event listeners for edit and delete buttons
    document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            editReminder(reminders[index]);
        });
    });

    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            reminders.splice(index, 1);
            updateReminderList();
        });
    });
}

// Edit reminder
function editReminder(reminder) {
    editingReminder = reminder;

    document.getElementById("comment").value = reminder.comment;
    document.getElementById("reminder-datetime").value = reminder.datetime.toISOString().slice(0, 16);
    frequencySelect.value = reminder.frequency;
    if (frequencySelect.value === "custom") {
        customMinutesField.classList.remove("hidden");
        customMinutesInput.value = reminder.frequency;
    } else {
        customMinutesField.classList.add("hidden");
    }

    if (reminder.disableTime) {
        disableCheckbox.checked = true;
        disableDatetimeField.classList.remove("hidden");
        document.getElementById("disable-datetime").value = reminder.disableTime.toISOString().slice(0, 16);
    } else {
        disableCheckbox.checked = false;
        disableDatetimeField.classList.add("hidden");
    }

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

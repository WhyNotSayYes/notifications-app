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
    // Когда чекбокс включен, показываем поле для даты выключения, иначе скрываем его
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

        // Запускаем его срабатывание
        scheduleReminder(newReminder);
    }

    updateReminderList(); // Обновляем список
    popup.classList.add("hidden"); // Закрываем попап
});



// Хранение напоминаний по времени
const remindersByTime = {};

// scheduleReminder
function scheduleReminder(reminder) {
    const now = new Date();

    // Удаляем напоминание из старой группы времени, если оно было обновлено
    for (const key in remindersByTime) {
        remindersByTime[key] = remindersByTime[key].filter((r) => r !== reminder);
        if (remindersByTime[key].length === 0) {
            delete remindersByTime[key]; // Удаляем пустые ключи
        }
    }

    // Проверяем время напоминания
    const timeDiff = reminder.datetime - now;

    if (timeDiff <= 0) {
        // Если время напоминания уже прошло, устанавливаем следующее срабатывание
        reminder.datetime = new Date(
            reminder.datetime.getTime() + reminder.frequency * 60000
        );
        scheduleReminder(reminder);
        return;
    }

    // Группируем напоминания по времени
    const reminderTimeKey = reminder.datetime.toISOString();
    if (!remindersByTime[reminderTimeKey]) {
        remindersByTime[reminderTimeKey] = [];
    }
    remindersByTime[reminderTimeKey].push(reminder);

    // Устанавливаем таймер
    setTimeout(() => {
        if (remindersByTime[reminderTimeKey]) {
            showNotificationForTime(reminderTimeKey);
        }

        // Устанавливаем следующее время напоминания
        reminder.datetime = new Date(
            reminder.datetime.getTime() + reminder.frequency * 60000
        );

        // Обновляем DOM и перезапускаем
        updateReminderInDOM(reminder);
        scheduleReminder(reminder);
    }, timeDiff);
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
function removeReminder(reminder) {
    const index = reminders.indexOf(reminder);
    if (index !== -1) {
        reminders.splice(index, 1); // Удаляем напоминание из массива
        updateReminderList(); // Обновляем список
    }
}

// Функция для отображения уведомлений для всех напоминаний на одно время
function showNotificationForTime(timeKey) {
    const remindersAtTime = remindersByTime[timeKey];
    if (!remindersAtTime) return;

    // Убираем напоминания, которые были удалены из общего массива
    const activeReminders = remindersAtTime.filter((reminder) =>
        reminders.includes(reminder)
    );

    if (activeReminders.length === 0) {
        delete remindersByTime[timeKey]; // Если активных напоминаний нет, очищаем ключ
        return;
    }

    // Создаем сообщение для уведомления
    let message = 'You have the following reminders:';
    activeReminders.forEach(reminder => {
        message += `\n- ${reminder.comment}`;
    });

    // Показываем уведомление
    showNotification(message);

    // Очищаем уведомления для этого времени
    delete remindersByTime[timeKey];
}

// Обновленная функция showNotification для показа уведомлений
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
    reminderList.innerHTML = ""; // Clear the list

    reminders.forEach((reminder, index) => {
        const now = new Date();
        const timeDiff = reminder.datetime - now;
        const disableTime = reminder.disableTime
            ? `Until ${reminder.disableTime.toLocaleString()}`
            : "No limit";

        const timeLeft = formatTimeLeft(timeDiff);

        // Обновляем содержимое элемента списка
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

    // Повторно добавляем обработчики для кнопок
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

    // Заполняем поля для редактирования
    document.getElementById("comment").value = reminder.comment;

    const localDatetime = new Date(
        reminder.datetime.getTime() - reminder.datetime.getTimezoneOffset() * 60000
    )
        .toISOString()
        .slice(0, 16); // Формат для <input type="datetime-local">
    document.getElementById("reminder-datetime").value = localDatetime;

    if (reminder.frequency && reminder.frequency !== 60 && reminder.frequency !== 120) {
        frequencySelect.value = "custom";
        customMinutesField.classList.remove("hidden");
        customMinutesInput.value = reminder.frequency;
    } else {
        frequencySelect.value = reminder.frequency.toString();
        customMinutesField.classList.add("hidden");
        customMinutesInput.value = "";
    }

    if (reminder.disableTime) {
        disableCheckbox.checked = true;
        disableDatetimeField.classList.remove("hidden");
        const localDisableDatetime = new Date(
            reminder.disableTime.getTime() - reminder.disableTime.getTimezoneOffset() * 60000
        )
            .toISOString()
            .slice(0, 16);
        document.getElementById("disable-datetime").value = localDisableDatetime;
    } else {
        disableCheckbox.checked = false;
        disableDatetimeField.classList.add("hidden");
        document.getElementById("disable-datetime").value = "";
    }

    // Показываем попап
    popup.classList.remove("hidden");

    saveReminderBtn.onclick = () => {
        // Применяем изменения
        reminder.comment = document.getElementById("comment").value;
        reminder.datetime = new Date(document.getElementById("reminder-datetime").value);
        reminder.frequency = frequencySelect.value === "custom"
            ? parseInt(customMinutesInput.value) || 60
            : parseInt(frequencySelect.value);
        reminder.disableTime = disableCheckbox.checked
            ? new Date(document.getElementById("disable-datetime").value)
            : null;

        // Обновляем список и перезапускаем напоминание
        updateReminderList();
        scheduleReminder(reminder);
        popup.classList.add("hidden");
    };
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
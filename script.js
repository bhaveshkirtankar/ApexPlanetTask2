// Contact Form Validation

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("msgError").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter valid email";
        valid = false;
    }

    if (message === "") {
        document.getElementById("msgError").textContent = "Message is required";
        valid = false;
    }

    if (valid) {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }
});

// To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let nameError = document.getElementById("name-error");
    let emailError = document.getElementById("email-error");
    let messageError = document.getElementById("message-error");
    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    }

    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format";
      isValid = false;
    }

    if (message === "") {
      messageError.textContent = "Message is required";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }

  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList").querySelector("ul");

  addTaskBtn.addEventListener("click", function() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    let newTask = document.createElement("li");
    newTask.innerHTML = `<span>${taskText}</span><button>Remove</button>`;
    taskList.appendChild(newTask);

    taskInput.value = "";
  });

  taskList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentNode.remove();
    }
  });
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const categoryInput = document.getElementById("categoryInput");
  
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;
    const category = categoryInput.value;
  
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);
  
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = `Due: ${dueDate || "No due date"} | Category: ${category}`;
    li.appendChild(meta);
  
    // Mark as completed
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // avoid marking as completed
      li.remove();
    });
  
    li.appendChild(delBtn);
  
    document.getElementById("taskList").appendChild(li);
  
    // Reset inputs
    taskInput.value = "";
    dueDateInput.value = "";
    categoryInput.value = "General";
  }
  
  function clearAll() {
    document.getElementById("taskList").innerHTML = "";
  }
  
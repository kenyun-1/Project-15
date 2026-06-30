function addTask(){
  let taskInput=document.getElementById("task-input");
  let taskText=taskInput.value;
  if (taskText === ""){
    return;}
  let taskCard=document.createElement("article");
  taskCard.className="task-card";
   taskCard.innerHTML = `
     <p>📚 ${taskText}</p>

     <button onclick="this.parentElement.remove()">❌</button>

     <button onclick="this.parentElement.classList.toggle('completed')">✅</button>
   `;
  document.getElementById("task-list").appendChild(taskCard);

  taskInput.value="";
  }


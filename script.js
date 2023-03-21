function addTask() {
    let input = document.getElementById("myinput");
    let task = input.value;
    let ul = document.getElementById("MyUL");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    input.value = "";
    li.classList.toggle("box");    
    li.addEventListener("click", function() {
      li.classList.toggle("done");
      li.classList.toggle("box");
      li.classList.toggle("checked");
    });
  }
  
let addButton = document.getElementById("add_button");
addButton.addEventListener("click", addTask);


function clearDoneTasks() {
    let doneTasks = document.querySelectorAll(".done");
    for (var i = 0; i < doneTasks.length; i++) {
        doneTasks[i].remove();
    }
}

let clearButton = document.getElementById("clear_button");
clearButton.addEventListener("click", clearDoneTasks);


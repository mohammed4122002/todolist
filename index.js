
let tasks=[]
if(localStorage.length ==0){
 tasks=[];
}
else{
 tasks=JSON.parse(localStorage.getItem("tasks"))
 print();
}

print();
document.getElementById("add").addEventListener("click", function () {
  let obj = {}
  obj.title = window.prompt("ادخل المهمة")
  let now = new Date();
  obj.date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear()
  obj.isDone = false;
  tasks.push(obj)
  addstorg()

  //
  print();
  //

})


function print() {
  document.querySelector(".tasks").innerHTML = "";
  let id = 0;
  for (let task of tasks) {

    document.querySelector(".tasks").innerHTML += ` <div class="task ${task.isDone ? "done" : ""}">
    <div style="width: 70%;">
      <h2>${task.title}</h2>
      <div>
        <span class="material-symbols-outlined">
          calendar_month
        </span>
        <span>${task.date}</span>
      </div>
    </div>
    <div class="pp" style="display: flex; justify-content: space-between;align-items: center; width: 20%;">
    <button onclick="deleteTask(${id})" class="circular" style="background-color: brown;"><span class="material-symbols-outlined">
        delete
      </span></button>
   
        
      ${task.isDone ? ` <button  onclick="Donex(${id})" class="circular" style="background-color: green;"><span class="material-symbols-outlined">
      unpublished
      </span></button>`: `   <button  onclick="Done(${id})" class="circular" style="background-color: green;"><span class="material-symbols-outlined">
      done_outline
    </span></button>`  }
         
    
    <button onclick="adite(${id})" class="circular" style="background-color: blue;"><span class="material-symbols-outlined">
        edit
      </span></button>
  
  </div>
  `
    id++;
  }
}
function deleteTask(id) {
  console.log(id)
  tasks.splice(id, 1)
  print()
  addstorg()
}
function adite(id) {
  tasks[id].title = window.prompt("اسم المهمة الجديد");
  print()
  addstorg()

}
function Done(id) {
  tasks[id].isDone = true;
  print()
  addstorg()
}

function Donex(id) {
  tasks[id].isDone = false;
  print()
  addstorg()
}

function addstorg(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
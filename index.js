var task= new Array("brushing my teeth" , "washing my face" , "eating food", "eating food", "eating food", "eating food", "eating food",);
console.log(task);
function addtask(){
    var newTask= document.getElementById("addTask_box").value
    task.push(newTask);
    console.log(task);
    updateUI();
}
function updateUI(){
    var task_contents="";
    for(let x = 0; x < task.length; x++){
        var TaskBox = `<div>
        <div>${task[x]}</div>
        <div onclick="deleteTask()">icon</div>
        </div>`
        task_contents = task_contents + TaskBox;
    }
    console.log(task_contents);
    console.log(TaskBox);

    
    document.getElementById("container").innerHTML = task_contents;
}
updateUI();

function deleteTask(){
    console.log("deleteTask")
}
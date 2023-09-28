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
        var TaskBox = `<div class = task_item>
                        <div>${task[x]}</div>
                        <div onclick="deleteTask(${x})"><img src="./assets/icons/trash-can.svg"></div>
                    </div>`
        task_contents = task_contents + TaskBox;
    }
    console.log(task_contents);
    console.log(TaskBox);

    
    document.getElementById("container").innerHTML = task_contents;
}
updateUI();

function deleteTask(task_Id){
    console.log(task_Id)
    // delete item
    task.splice(task_Id, 1)
    // updateUI
    updateUI();
}

function StartEditTask(task_Id){
    console.log(task_Id)

}

function SaveEditTask(task_Id){
    console.log(task_Id)

}
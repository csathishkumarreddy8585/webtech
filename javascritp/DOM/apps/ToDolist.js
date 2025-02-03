let taskformE1=document.getElementById('task-form');
let taskE1=document.getElementById('task-el');

let tasklist=localStorage.getItem(task)?JSON.parse(localStorage.getItem('tasks'))


taskformE1.addEventListener('submit',function(e)
{
     e.preventDefault();
     let task=taskE1.value
     tasklist.unshift(task);
     localStorage.setItem('tasks',Json.stringify(tasklist));
     console.log(tasklist);
     taskE1.value="";
 });


//display tasks
 function displaytasks()
 {
    
        let eachtask=``;
        tasklist.forEach(function(task,i)
         {
            eachtask+=`<li class="list-group-item list-group-item-dark mb-2">
                        <span>${task}</span>
                        <i class="bi bi-archive-fill float-end" onclick="deletetask(${i})"></i>
                        <i class="bi bi-pen-fill float-end mt-4" onclick="updatetask(${i})"></i>
                        
                    </li>    `
            
        });
        document.getElementById('task-list-el').innerHTML=eachtask;
    }
 }
 displaytasks();


 
//delete functionlity
function deletetask(index)
{
    taskinputE1.value=tasklist[index].taskval;
    tasklist.splice(index,1);
    localStorage.setItem('task',JSON.stringify(tasklist));
    displaytasks();
}
//update functionlity 
function updatetask(index)
{
    alert(tasklist[index])
    taskinputE1.value=tasklist[index].taskval;
    tasklist.splice(index,1);
    localStorage.setItem('task',JSON.stringify(tasklist));
    displaytasks();
}


let Add_btn=document.querySelector('#addbtn');
let Sel1=document.querySelector('#sel1');
let Sel2=document.querySelector('#sel2');
let Row=document.querySelector('.row')

let ToDoList= JSON.parse(localStorage.getItem('List-tasks')) ?? [];
// localStorage.clear()

Add_btn.addEventListener('click',function(e)
{    
    e.preventDefault();
    let v1=Sel1.value;
    let v2=Sel2.value;
    ToDoList.push((v2+' '+v1));
    localStorage.setItem('List-tasks',JSON.stringify(ToDoList));
    addTask();
});

function addTask()
{
    ToDoList=JSON.parse(localStorage.getItem('List-tasks'));
    let empty_str='';
    ToDoList.forEach(function(val,ind)
    {   
        a1=val.split(' ');
        empty_str +=`<div class="col-4 cols">
                    <div class="card">
                        <div class="card-header head">
                            <input type="checkbox">
                            <p>${a1[0]} ${a1[1]}</p>
                            <i class="bi bi-x-lg" onclick="del(${ind})"></i>
                        </div>
                    </div>
                </div>`; 
    })
    Row.innerHTML=empty_str;
}
addTask();

function del(ind)
{
    ToDoList.splice(ind,1);
    localStorage.setItem('List-tasks',JSON.stringify(ToDoList));
    addTask();
}




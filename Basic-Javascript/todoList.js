let addBtn=document.getElementById('addBtn')
let newTask=document.getElementById('newTask')
let taskList=document.getElementById('taskList')

addBtn.onclick=function(){
    console.log(newTask.value)

    if(typeof (taskList.innerHTML+='<li>'+ newTask.value+ '</li>')==null)
    {
        return alert('nothing added')
    }
    else{
        return taskList.innerHTML+='<li>'+ newTask.value+ '</li>'
    }

   
    
}
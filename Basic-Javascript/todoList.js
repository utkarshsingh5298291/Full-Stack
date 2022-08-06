let addBtn=document.getElementById('addBtn')
let newTask=document.getElementById('newTask')
let taskList=document.getElementById('taskList')

addBtn.onclick=function(){
    console.log(newTask.value)
    const newItem=document.createElement('li')
    newItem.textContent=newTask.value
    taskList.appendChild(newItem)
      /* taskList.innerHTML+='<li>'+ newTask.value+ '</li>'*/
    
}

function populateList(){
    let start=Date.now()
    
    for(let i=0;i<100;i++)
    {
       const newItem=document.createElement('li')
       newItem.textContent=i
       taskList.appendChild(newItem)
    }

    console.log(Date.now()-start)
}

/*
appending a string is not good but better do it in this way

*/
const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todolist");
const deleteAll = document.querySelector(".footer button");



inputBox.onkeyup = () =>{
    let userData = inputBox.value;
    if(userData.trim() !=0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");

    }
}
showTasks();  


addBtn.onclick = ()=>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr)); 
    showTasks();  
    addBtn.classList.remove("active");

}


function showTasks(){
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }

    const pendingNum = document.querySelector(".pendingNumber");
    pendingNum.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAll.classList.add("active");
    }else{
        deleteAll.classList.remove("active");
    }

    

    let newiTag = '';
    listArr.forEach((element,index) => {
        newiTag += `<li> ${element}<span onclick = "deleteTask(${index})";><i class="fa-solid fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newiTag;
    inputBox.value ="";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New Todo");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    
    localStorage.setItem("New Todo",JSON.stringify(listArr)); 
    showTasks();


}

deleteAll.onclick = () =>{
    listArr = [];
    localStorage.setItem("New Todo",JSON.stringify(listArr)); 
    showTasks();
}
// getting all required element
const inputField= document.querySelector(".input-field textarea"),
todoLists= document.querySelector(".todoLists"),
pendingNum= document.querySelector(".pending-num"),
clearButton= document.querySelector(".clear-button")

// we will call the function while adding,deleting and checking -unchecking the task
function allTask() {
    let task=document.querySelectorAll(".pending")

 //if tasks' length is 0 then pending num text content will be no, if not then pending num value will be task's length
    pendingNum.textContent=task.length === 0 ? "no" :task.length;

    let allList=document.querySelectorAll(".list");

    if(allList.length > 0){
        todoLists.style.marginTop="20px"
        clearButton.style.pointerEvents="auto"
        return
    }

    todoLists.style.marginTop="0px"
    clearButton.style.pointerEvents="none"


}


// add task while we put value in text area and press enter
inputField.addEventListener("keyup",(e)=>{
    let inputVal=inputField.value.trim(); //   Removes the leading and trailing white space and line terminator characters from a string.
    
    // if enter button is clicked and inputed value length is greater than 0
    if(e.key ==="Enter" && inputVal.length >0){
        let liTag=`<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox">
        <span class="task">${inputVal}</span>
        <i class="uil uil-trash" onclick="deleteTask(this)"></i>
    </li>`;

    todoLists.insertAdjacentHTML("beforeend",liTag) // inserting li tag inside the todolist div
    inputField.value="";   // removing value from  input field
    allTask();
    }
});

// checking and uncheking the checkbox while we click on the task

function handleStatus(e) {
    const checkbox=e.querySelector("input");// getting checkbox
    checkbox.checked=checkbox.checked ? false:true;
    e.classList.toggle("pending")
    allTask();
}

// deleting task while we click on the delete icon.
function deleteTask(e) {
    e.parentElement.remove();     // getting parent element and remove it
    allTask();
}


//deleting all the tasks while we click on the clear button.
clearButton.addEventListener("click",()=>{
    todoLists.innerHTML="";
    allTask();
})
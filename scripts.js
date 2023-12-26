const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function AddTask(){
    if(inputBox.value === ""){
        alert("You Must write Something.")
    }else{
        
        let li = document.createElement("li");        
        li.innerText = inputBox.value;
        listContainer.appendChild(li);

        let icon = document.createElement("div");
        icon.innerHTML = "<i class='bx bxs-check-circle' ></i> <i class='bx bx-circle'></i>";
        icon.classList.add("icon")
        li.appendChild(icon);

        let span = document.createElement("span");
        span.innerHTML = "<i class='bx bx-x'></i>";
        span.classList.add("btn_delete")
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.className === "bx bx-x"){
        console.log(e);
        e.target.parentElement.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("Data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}
showTask()
const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You Must Write Something!");
    }else{
      let li=document.createElement("li");
      li.innerHTML=inputBox.value;
      listcontainer.appendChild(li);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listcontainer.addEventListener("click",function(e){
    // if we clicked on li then it shoud show done work
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
        // if we clicked on span it delete span  task will be delted
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

// to save remain data as it is when we refresh browser or close the browser
function saveData(){
localStorage.setItem("data",listcontainer.innerHTML);
}

// shows all data in page
function showData(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();
const body = document.body;
const checkbox = document.getElementById("checkbox");

const darkMode = localStorage.getItem("darkMode");
console.log(darkMode);
if(darkMode === "enabled"){
    body.classList.add("dark");
    checkbox.checked = true;
}

checkbox.addEventListener("change",function(){
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        localStorage.setItem("darkMode", "enabled");
    }

    else{
        localStorage.setItem("darkMode", "disabled");
    }
})
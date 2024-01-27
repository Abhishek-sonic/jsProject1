let add = document.querySelector("#addF");
let remove = document.querySelector("#removeF");

let stat = document.querySelector("#status"); 

add.addEventListener("click",()=>{
    stat.innerHTML = "Friend";
    stat.style.color = "green";
    // add.style.olor = "purple"
})
remove.addEventListener("click",()=>{
    stat.innerHTML = "Stranger";
    stat.style.color = "red";
    // add.style.olor = "purple"
})
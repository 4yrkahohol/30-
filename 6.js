var num = 1
function addOptions(){
    let input = document.getElementById("pole").textContent
    let select = document.getElementById("dropdown")
    let addoption = document.createElement("option")
    select.appendChild(addoption)
    addoption.setAttribute("id", `${num}option`)
    let option = document.getElementById(`${num}option`)
    option.innerHTML=input
    num++   
}
const number = document.getElementById("number")

console.log(number.textContent)
let callNum = () =>{
    // write functiuon to make call here
    window.open(`${number.textContent}`)
    
}
number.addEventListener("click", callNum )
const number = document.getElementById("number")
const formButton = document.getElementById("formButton")
const igLink = document.getElementById("ig-link")


console.log(number.textContent)
let callNum = () =>{
    // write functiuon to make call here
    window.open(`${number.textContent}`)
    
}

let buttonChange = () =>{
    formButton.innerHTML = `Sucessfully Submitted`
}

let igRedirect = ()=>{
window.open("https://www.instagram.com/")
}
number.addEventListener("click", callNum )
formButton.addEventListener("click", buttonChange)
igLink.addEventListener("click", igRedirect)



// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setInterval(showSlides, 2000); // Change image every 2 seconds
// }

for( let i = 0; i < 101; i++){
    if (i%2 === 0 && i%3 === 0){
        console.log("fizzbuzz")
    }else if (i%2 ===0){
        console.log("fizz")
    } else if (i%3===0){
        console.log("buzz")
    }
}
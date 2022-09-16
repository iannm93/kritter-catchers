const number = document.getElementById("number")

console.log(number.textContent)
let callNum = () =>{
    // write functiuon to make call here
    window.open(`${number.textContent}`)
    
}
number.addEventListener("click", callNum )

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
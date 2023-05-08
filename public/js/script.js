const number = document.getElementById("number")
const formButton = document.getElementById("formButton")
const igLink = document.getElementById("ig-link")
let gallery = document.querySelector("#gallery");
let imageTarget = document.getElementById("img-target");
const url =
      "https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url&access_token=IGQVJVajIxb1JxRVVWWmgxNnhJRk5sUkh2YmVERGdRZAnIzN0ZAsTHFjYmQxdWFMdG52Wm5IWXVJcjlwVmhRdjNXSnFGVUlyeTNoMldxUG1qRTlRZAEpLdGU3Q3FSVGZAXVzBhU3NldXpxQUFaR25LeXBlYQZDZD";

// console.log(number.textContent)
// let callNum = () =>{
//     // write functiuon to make call here
//     window.open(`${number.textContent}`)
    
// }

// let buttonChange = () =>{
//     formButton.innerHTML = `Sucessfully Submitted`
// }

// let igRedirect = ()=>{
// window.open("https://www.instagram.com/")
// }
// number.addEventListener("click", callNum )
// formButton.addEventListener("click", buttonChange)
// igLink.addEventListener("click", igRedirect)

// IG API function

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

async function instagram() {
    // const urlAPI =
    // `https://lit-temple-69032.herokuapp.com/api`
    // const urlAPI2 =`http://localhost:8080/api`
  
    let data = await fetch(url);
    let response = await data.json();
    // console.log(response.data)
    let goToInstagram = (event) => {
      // storing whatever's clicked in a variable
      let elementClicked = event.target;
      // looping through IG API
      for (let j = 0; j < response.data.length; j++) {
        if (
          // if user click is equal to the caption API or the URL of the iamge from the gallery
          // open the instagram post itself
          elementClicked.src === response.data[j].media_url ||
          elementClicked.textContent === response.data[j].caption
        ) {
          window.open(`${response.data[j].permalink}`);
        }
      }
    };
  // test
  
    let allImages = [];
    console.log(response.data)
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].caption === undefined ){
        response.data.splice(i, 1)
      }
      if(response.data[i].permalink.includes("reel")){
        console.log("reel")
          let eachVideo =   `<div id="cardReel"  class="card" style="width: 18rem;">    
        <video type="video/mp4" playsinline loop controls="controls" class="card-img-top" alt="instagram reels">
          <source src="${response.data[i].media_url}" type="video/mp4" >
        </video>
      </div>`
        allImages += eachVideo
        
      }else{
  
        let eachImage = `  
        <div id="card" class="card" style="width: 18rem;">
        
        <img id="specific-image" src="${response.data[i].media_url}" class="card-img-top" alt="...">
        <div class="card-body">
        <p id="small-text" class= "text-start">${response.data[i].caption}</p>
        </div>
        </div>
        `;
        allImages += eachImage
      }
        // cuts out reels, cuts out posts with no captions, and cuts out posts with no pictures
  
      gallery.addEventListener("click", goToInstagram);
   
      // allImages.push(eachImage);
      imageTarget.innerHTML = allImages;
    }
  }
  
  
  
  instagram();
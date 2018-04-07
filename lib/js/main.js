// let myIndex = 0;

// function carousel() {
//     let slides = document.getElementsByClassName("slide");
//     console.log(slides)
//     for (let slide of slides){
//     	slide.style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > slides.length) {myIndex = 1}    
//     slides[myIndex-1].style.display = "block";  
//     setTimeout(carousel, 4000); 
// }

// carousel();

$('.carousel').carousel(
  setTimeout(carousel, 4000)
  )

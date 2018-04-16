

// google map
function initMap() {
	var sl = {lat: 29.619688, lng: -95.630391}; 
	var map = new google.maps.Map(document.getElementById('g-map'), {
		zoom: 10,
		center: sl
	});
	var marker = new google.maps.Marker({
		position: sl,
		map: map
	});
};
//	page view
// function navlistener(){
// 	let navB = document.querySelectorAll('#nav-list a'),
// 		pageViews = [
// 			document.getElementById('index-page'),
// 			document.getElementById('portfolio-page'),
// 			document.getElementById('contact-page')
// 		];
// 	for(let nav of navB) {
// 		nav.addEventListener("click", function(){
// 			let selected = $(this).data("tag");			/*a mix of jquer and js cause jquery is easier to use*/
// 			for (let page of pageViews){
// 				console.log(page.id)
// 				if (page.id == selected){
// 					page.style.display = 'block';
// 					console.log("yes")
// 				}
// 					else{
// 						page.style.display = 'none'; 
// 						console.log("no") 
// 					}
// 			}
// 		}) 	/* simple loop that checks the dataset of clicked buttons dataset to my pages if they match remove hidden and add hidden to the rest */
// 	}
// };

// navlistener();
$('.toggle').click(function() {
  $('.slide-in').toggleClass('show');
});

let pageIn = document.querySelector('.ease-in');
let pageOut = document.querySelector('.ease-out');
let contactPage = document.querySelector('slide-in');

pageIn.addEventListener("click", function(){
	contactPage.classList.add('show');
};
pageOut.addEventListener("click", function(){
	contactPage.classList.remove('show');
};
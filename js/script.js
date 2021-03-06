function myFunction() {
    var x = document.getElementById("sub-nav");
    if (x.className === "sub-nav") {
      x.className += " responsive";
    } else {
      x.className = "sub-nav";
    }
  }

 //carousel slideshow code 
var slideIndex = 1;
showSlides(slideIndex);

//next and previous controls

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("carousel-sub");
  var arr = Array.prototype.slice.call( slides, 0 );
  if(n>slides.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=slides.length;
  }
  console.log(arr);
  for (i=0;i<arr.length;i++)
  {
    arr[i].style.display="none";
  }
  x=arr.splice(0,slideIndex);
  console.log(tag);
  arr=[...arr,...x];
  // arr.push(x);
  console.log(x);
  console.log(arr);
  for (i=0;i<arr.length-1;i++)
  {
    arr[i].style.display="block";
  }
  
  console.log(slideIndex);
  
}
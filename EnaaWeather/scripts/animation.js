let previuosButton = document.querySelector('.previuos');
let nextButton = document.querySelector('.next');
let slides = document.querySelectorAll('.box');
let slideIndex = 0;

slides[slideIndex].classList.add('displayBox');
console.log(slides.length);
function showSlide(index){
  if(index >= slides.length){
    index = 0;
  }else if(index < 0){
    index = slides.length - 1;
  }
  slides.forEach(slide=>{
    slide.classList.remove('displayBox');
  });
  slides[index].classList.add('displayBox');
  slideIndex = index;
}
function prevBox(){
  slideIndex--;
  showSlide(slideIndex);
}
function nextBox(){
  slideIndex++;
  showSlide(slideIndex);
}
previuosButton.addEventListener('click', prevBox());
nextButton.addEventListener('click', nextButton());

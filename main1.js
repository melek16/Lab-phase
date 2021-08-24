
//menu_control
var icon =document.getElementById("my_company")
var menu =document.getElementById("menu")

icon.addEventListener('click',showMenu)
function showMenu(){
    menu.style.display='flex'
    menu.style.animation= "0.6s ease-out 0s 1 slideInLeft";
    menu.style.left="0"
    
    icon.removeEventListener('click',showMenu)
    icon.addEventListener('click',hideMenu)
    function hideMenu(){
 
  menu.style.left="-16%"
        menu.style.animation= "0.6s ease-out 0s 1 slideInRight";
        
        
        icon.removeEventListener('click',hideMenu)
        icon.addEventListener('click',showMenu)
    }
}


// coursel
  // function classToggle() {
  //     var el = document.querySelector('.icon-cards__content');
  //     el.classList.toggle('step-animation');
  //     console.log(document)
  //   }

  //      document.querySelector(".icon-cards__content .step-animation").addEventListener('click', classToggle);
   


 
//hide navbar when scroll
var header =document.getElementById("header")
var menu =document.getElementById("menu")
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    
   
  } else {
    header.style.top = "-80px";
    menu.style.left="-16%"
    menu.style.animation= "0.3s ease-out 0s 1 slideInRight";
  
    
  }
  prevScrollpos = currentScrollPos;
}




var purchase_btns=document.getElementsByClassName("purchase_btn")
for(var purchase_btn of purchase_btns){
  purchase_btn.addEventListener('click',addToCart)
}
var cartSapn=document.getElementById("cart_nbr")
function addToCart(){
  
  cartSapn.innerHTML++
  this.removeEventListener('click',addToCart)
  this.innerText="Remove from Cart"
  this.style.backgroundColor="tomato"
  this.addEventListener('click',removeItem)
}
function removeItem(){
  cartSapn.innerHTML--
  this.removeEventListener('click',removeItem)
  this.innerText="Purchase"
  this.style.backgroundColor="rgba(36, 172, 172, 0.875)"
  this.addEventListener('click',addToCart)
}




//carousell
const gap = 16;
for (var x in document.getElementsByClassName("wrapper")){
  const 
  carousel = document.getElementsByClassName("wrapper")[x].querySelector("#carousell"),
  content = document.getElementsByClassName("wrapper")[x].querySelector("#content"),
  next = document.getElementsByClassName("wrapper")[x].querySelector("#next"),
  prev = document.getElementsByClassName("wrapper")[x].querySelector("#prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


}

 



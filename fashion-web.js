// Initialize Swiper 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  
  
  // scroll js*******


  window.addEventListener('scroll', ()=> {
    document.getElementById('full-nav-design').classList.toggle
    ('window-scroll' , window.scrollY > 100)
  })

 

  

  
  // Every scroll behave js *********

  window.addEventListener('scroll',()=>{
    let content = document.querySelector('.text-intro');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /3.0;
    if(contentPosition < screenPosition){
      content.classList.add('activate');
    }
    else{
      content.classList.remove('activate');
    }
  
  })



// nav-responsive

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


  // const hamburger = document.querySelector(".hamburger");
  // const fullnavdesign = document.querySelector("#full-nav-design");

  // hamburger.addEventListener("click", ()=>{
  //   hamburger.classList.toggle("active");
  //   fullnavdesign.classList.toggle("active");
  // })


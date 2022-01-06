/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*======= MENU SHOW =======*/
if (navToggle) {
  navToggle.addEventListener("click", () =>{
    navMenu.classList.add("show-menu")  /* 当navtoggle被点击，新增类“show-menu” */
  })
}

/*======= MENU HIDDEN =======*/
if(navClose) {
  navClose.addEventListener("click", () =>{
      navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link") /* 获取文档中class为nav__link的所有元素*/

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    //当点击任意一个nav__link的元素，将会移除类show-menu。
    navMenu.classList.remove("show-menu") 
}
navLink.forEach(n => n.addEventListener("click", linkAction)) //为每个nav__link元素绑定linkAction

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header")
    //当页面滚动超过50vh，新增类“scroll-header”
    if (this.scrollY >= 50) header.classList.add("scroll-header");else header.classList.remove('scroll-header')
}
window.addEventListener("scroll", scrollHeader)

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper",{
    spaceBetween: 24,
    loop: "true",
    slidesPerView: "auto",
    centeredSlide: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    breakpoints: {
      992: {
        spaceBetween: 80,
      },
    }
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]") 

function scrollActive() {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id")
        //卷轴滚动到指定位置会选择menu对应的section，为其添加action-active类添加变色效果。
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)
/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
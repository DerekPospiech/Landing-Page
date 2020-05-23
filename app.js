/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

const sections = document.querySelectorAll('section'); //used for scroll event fucnction and buildNav

function scrollToSection(sect){
sect.scrollIntoView({behavior: 'smooth'});
}


// builds the nav
function buildNav(){
  const myDocFrag = document.createDocumentFragment();
  let i = 1; //used to update the href link in the innerhtml of the list item
  
  for (const sect of sections) {
    const listItem = document.createElement('li');
    const listItemInnerText = sect.querySelector('h2').innerText;
    listItem.innerHTML = `<a href="#section${i}" class="header__link">${listItemInnerText}</a>`;
    listItem.addEventListener("Click", function () {
      sect.scrollIntoView("smooth");
    });
  
    myDocFrag.appendChild(listItem);
   i++;
  }
  
  //appends doc fragment to unordered list
  document.getElementById("navbar__list").appendChild(myDocFrag);
  }
  
  buildNav();

const links = document.querySelectorAll('.header__link'); //gets the links that were dynamiclly generated at the top of the page. must run after buildnav

//any time document is scrolled it checks if a section is in view and sets the active state
window.addEventListener("scroll", function(){
  for (const sect of sections) {
    if(sect.getBoundingClientRect().top + sect.getBoundingClientRect().bottom / 2 <= this.window.innerHeight){
      sect.classList.add("your-active-class")
      for (link of links) {
        if (link.innerText == sect.querySelector('h2').innerText) {
          link.classList.add("your-active-section")
        } else {
          link.classList.remove("your-active-section")
        }
      }
    } else {
      sect.classList.remove("your-active-class")
    }
  }
});
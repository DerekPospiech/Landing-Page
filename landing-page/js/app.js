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


//decides if the element is in the viewport at all
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 ||
        bounding.left >= 0 ||
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//any time document is scrolled it checks what is into view and sets the active state
document.addEventListener("scroll", function(){
  for (const sect of sections) {
    if(isInViewport(sect)){
      sect.classList.add("your-active-class")
    } else {
      sect.classList.remove("your-active-class")
    }
  }
});


// builds the nav
function buildNav(){
const myDocFrag = document.createDocumentFragment();
let i = 1; //used to update the href link in the innerhtml of the list item

for (const sect of sections) {
  const listItem = document.createElement('li');
  const listItemInnerText = sect.querySelector('h2').innerText;
  listItem.innerHTML = `<a href="#section${i}" class="header__link">${listItemInnerText}</a>`
  listItem.addEventListener("Click", function () {
    sect.scrollIntoView();
  });

  myDocFrag.appendChild(listItem);
 i++;
}

//appends doc fragment to unordered list
document.getElementById("navbar__list").appendChild(myDocFrag);
}



buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



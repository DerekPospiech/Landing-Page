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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){

const myDocFrag = document.createDocumentFragment();
const sections = document.querySelectorAll('section');
let i = 1; //used to update the href link in the innerhtml of the list item

for (const section of sections) {
  const listItem = document.createElement('li');
  const listItemInnerText = section.querySelector('h2').innerText;
  listItem.innerHTML = "<a href='#section${i}'>${listItemInnerText}</a>"
  myDocFrag.appendChild(listItem);
 i++;
}

//appends doc fragment to unordered list
const navbarList = document.querySelector('navbar__list');
navbarList.appendChild(myDocFrag);
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



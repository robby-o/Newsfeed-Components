/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

function createMenu(items) {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const unList = document.createElement("ul");
  menu.append(unList);

  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    unList.append(listItem);
  });

  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", e => {
    e.stopPropagation;
    if (menu.classList.contains("menu--open")) {
      menu.classList.add("slideOut");
      window.setTimeout(() => {
        menu.classList.remove("menu--open");
        menu.classList.remove("slideOut");
      }, 1000);
    } else {
      menu.classList.add("menu--open");
      menu.classList.add("slideIn");
    }

    const articles = document.querySelector(".articles");
    articles.addEventListener("click", e => {
      if (menu.classList.contains("menu--open")) {
        menu.classList.add("slideOut");
        window.setTimeout(() => {
          menu.classList.remove("menu--open");
          menu.classList.remove("slideOut");
        }, 1000);
      }
    });
    // menu.classList.toggle("menu--open");
  });

  return menu;
}

const header = document.querySelector(".header");
header.append(createMenu(menuItems));

// Step 1: Write a function that will create a menu component as seen below:

// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>

// The function takes an array as its only argument.

// Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
// Add those items to the <ul>

// Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

// Step 5: return the menu component.

// Step 6: add the menu component to the DOM.

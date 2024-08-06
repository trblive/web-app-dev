// Modularisation Exercise.js

import { addAlert } from "./eventHandlers.js";
import { addBooks } from "./domUpdate.js";
import { Post } from "./post.js";


// Method to initialise the app
function initialiseApp() {

  // init variables
  const firstPost = new Post("First Post", "This is the content of the first post.");
  const secondPost = new Post("Second Post", "This is the content of the second post.");
  const books = ["Harry Potter I", "Harry Potter II", "Harry Potter III"];

  // Add some sample posts
  firstPost.addPost();
  secondPost.addPost();

  // Add some sample books
  addBooks(books);

  // add event listeners
  addAlert("button1", "click", "Button clicked!");
  addAlert("button2", "mouseover", "Button hovered over!");
  addAlert("button3", "dblclick", "Button double clicked!");
}

// Initialise the app when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initialiseApp);
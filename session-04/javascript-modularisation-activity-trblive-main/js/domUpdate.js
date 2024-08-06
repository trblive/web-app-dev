// domUpdate.js
// module: functions that manipulate the DOM.

export function updateDOM(element, content) {
    element.innerHTML = content;
}

// Method to dynamically add a list of books to the sidebar
function addBooks(books) {
    const booksContainer = document.createElement("aside");
    booksContainer.className = "section subtitle is-5 has-text-primary";

    const bookList = document.createElement("ul");
    bookList.id = "list";

    books.forEach(function (book) {
        const listItem = document.createElement("li");
        updateDOM(listItem, book);
        bookList.appendChild(listItem);
    });

    booksContainer.appendChild(bookList);
    const container = document.querySelector(".container");
    container.appendChild(booksContainer);
}

export { addBooks };
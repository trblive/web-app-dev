// Challenge - Stage 4
/**
 * State-based UI Component
* @param {String} selector The selector for the target element
* @param {Object} options  Component options
*/
let MyListComponent = function (selector, options) {
    this.element = document.querySelector(selector);
    this.data = options.data;
    this.template = options.template;
};

/**
 * Render a new UI
*/
MyListComponent.prototype.render = function () {
    this.element.innerHTML = this.template(this.data);
}

// The list of books
let app = new MyListComponent('#app', {
    data: {
        books: ['Harry Potter I', 'Harry Potter II', 'Harry Potter III']
    },
    template: function (props) {
        return '<ul>' +
            props.books.map(function (book) {
                return '<li>' + book + '</li>';
            }).join('') + '</ul>';
    }
});

// Render the list
app.render();

// Update the UI
app.data.books.push('Harry Potter IV');
app.data.books.push('Harry Potter V');
app.render();
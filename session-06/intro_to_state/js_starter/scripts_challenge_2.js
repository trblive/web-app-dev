// Challenge - Stage 2
// The data
let data = {
	books: ['Harry Potter I', 'Harry Potter II', 'Harry Potter III']
};

// The template
let template = function (props) {
	return '<ul>' +
		props.books.map(function (book) {
			return '<li>' + book + '</li>';
		}).join('') + '</ul>';
}

// Render the template into the UI
let app = document.querySelector('#app');
app.innerHTML = template(data);

// Update the UI
data.books.push('Harry Potter IV');
data.books.push('Harry Potter V');
app.innerHTML = template(data);

// manipulating the data
data.books = data.books.slice(1);
data.books.pop();
data.books= data.books.filter((book) => book.length < 16);

app.innerHTML = template(data);
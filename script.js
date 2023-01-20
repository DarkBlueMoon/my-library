const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead ? "read" : "not read yet";
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
  };
}

function addBookToLibrary() {}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
myLibrary.push(theHobbit);
const theFellowship = new Book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  423,
  false
);
myLibrary.push(theFellowship);
const inkheart = new Book("Inkheart", "Cornelia Funke", 534, true);
myLibrary.push(inkheart);
const matilda = new Book("Matilda", "Roald Dahl", 232, true);
myLibrary.push(matilda);

// console.log(theHobbit.info());

function displayBooks(library) {
  library.forEach((book) => {
    console.log(book.info());
  });
}

displayBooks(myLibrary);

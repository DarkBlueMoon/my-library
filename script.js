const myLibrary = [];
const tableBody = document.querySelector("tbody");

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? "read" : "not read yet";
  }

  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
  }
}

function addBookToLibrary(title, author, numPages, hasRead) {
  myLibrary.push(
    new Book(title, author, parseInt(numPages, 10), Boolean(hasRead))
  );
}

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

function createTableTextNode(data) {
  const dataNode = document.createElement("td");
  const dataText = document.createTextNode(data);
  dataNode.appendChild(dataText);

  return dataNode;
}

function createTableButtonNode(data, btnClass) {
  const dataNode = document.createElement("td");
  const dataButton = document.createElement("button");
  const dataText = document.createTextNode(data);
  dataButton.appendChild(dataText);
  dataButton.classList.add(btnClass);
  dataNode.appendChild(dataButton);

  return dataNode;
}

function createTableRow(book) {
  const tr = document.createElement("tr");
  tr.appendChild(createTableTextNode(book.title));
  tr.appendChild(createTableTextNode(book.author));
  tr.appendChild(createTableTextNode(book.pages));
  tr.appendChild(createTableTextNode(book.hasRead));
  tr.appendChild(createTableButtonNode("Toggle", "toggleRead"));
  tr.appendChild(createTableButtonNode("Delete", "delete"));

  return tr;
}

function createTableBookEntry(book) {
  tableBody.appendChild(createTableRow(book));
}

function displayBooks(library) {
  library.forEach((book) => {
    createTableBookEntry(book);
  });
}

displayBooks(myLibrary);

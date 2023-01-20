const myLibrary = [];
const tableBody = document.querySelector("tbody");

class Book {
  constructor(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead ? "read" : "not read yet";
  }
}

function addBookToLibrary(title, author, numPages, hasRead) {
  myLibrary.push(
    new Book(title, author, parseInt(numPages, 10), Boolean(hasRead))
  );
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Fellowship of the Ring", "J.R.R. Tolkien", 423, false);
addBookToLibrary("Inkheart", "Cornelia Funke", 534, true);
addBookToLibrary("Matilda", "Roald Dahl", 232, true);

function createTableTextNode(data) {
  const dataNode = document.createElement("td");
  const dataText = document.createTextNode(data);
  dataNode.appendChild(dataText);

  return dataNode;
}

function createTableButtonNode(data, btnClass) {
  const dataButton = document.createElement("button");
  const dataNode = document.createElement("td");
  const dataText = document.createTextNode(data);
  dataButton.appendChild(dataText);
  dataNode.appendChild(dataButton);
  dataButton.classList.add(btnClass);

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

const toggleBtns = document.querySelectorAll(".toggleRead");
const deleteBtns = document.querySelectorAll(".delete");

// btn.parentElement.previousElementSibling.textContent;

// toggleBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     // const target = e.target;
//     // console.log(target.parentElement.previousElementSibling.textContent);
//   });
// });

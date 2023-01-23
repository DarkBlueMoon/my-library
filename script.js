const myLibrary = [];
const tableBody = document.querySelector("tbody");

class Book {
  constructor(title, author, pages, readBool) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasReadBoolean = readBool;
    this.hasReadText = this.hasReadBoolean ? "read" : "not read yet";
  }

  updateReadStatusText() {
    this.hasReadText = this.hasReadBoolean ? "read" : "not read yet";
  }

  toggleReadStatus() {
    this.hasReadBoolean = !this.hasReadBoolean;
    this.updateReadStatusText();
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

function clearTable() {
  tableBody.innerHTML = "";
}

function findDataIndexFromBtn(btn) {
  const btnContainerRow = btn.parentNode.parentNode;
  return parseInt(btnContainerRow.getAttribute("data-index"), 10);
}

function assignDataIndexToTableElements() {
  const tableRows = [...tableBody.rows];
  tableRows.forEach((row, index) => {
    row.setAttribute("data-index", index);
  });
}

function createTableNode(data, btnClass = null) {
  const dataNode = document.createElement("td");
  const dataText = document.createTextNode(data);

  if (btnClass === null) {
    dataNode.appendChild(dataText);
  } else {
    const dataButton = document.createElement("button");
    dataButton.appendChild(dataText);
    dataButton.classList.add(btnClass);
    dataNode.appendChild(dataButton);
  }

  return dataNode;
}

function createTableRow(book) {
  const tr = document.createElement("tr");
  tr.appendChild(createTableNode(book.title));
  tr.appendChild(createTableNode(book.author));
  tr.appendChild(createTableNode(book.pages));
  tr.appendChild(createTableNode(book.hasReadText));
  tr.appendChild(createTableNode("Toggle", "toggleRead"));
  tr.appendChild(createTableNode("Delete", "delete"));

  return tr;
}

function displayBooks(library) {
  library.forEach((book) => {
    tableBody.appendChild(createTableRow(book));
  });
  assignDataIndexToTableElements();
}

tableBody.addEventListener("click", (e) => {
  const targ = e.target;

  const index = findDataIndexFromBtn(targ);
  if (targ.classList.contains("delete")) {
    myLibrary.splice(index, 1);
  } else if (targ.classList.contains("toggleRead")) {
    myLibrary[index].toggleReadStatus();
  }

  clearTable();
  displayBooks(myLibrary);
});

displayBooks(myLibrary);

const myLibrary = [];

let title = document.getElementById("bookTitle");
let author = document.getElementById("bookAuthor");
let pages = document.getElementById("bookPages");


const submitButton = document.getElementById("addButton");

function addBookToLibrary(title, author, pages) {
    title = title.value;
    author = author.value;
    pages = pages.value;
    let read = document.querySelector('input[name="readInfo"]:checked');
    read = read.value;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(newBook);
    console.log(myLibrary);
    console.log(newBook);
}


submitButton.onclick = function(e) {
    e.preventDefault();
    addBookToLibrary(title, author, pages);
};

function displayBook(book) {
    const newRow = document.createElement("tr");
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newPages = document.createElement("td");
    const newReadTD = document.createElement("td");
    const newRead = document.createElement("button");
    const newTD = document.createElement("td");
    const newDelete = document.createElement("button");

    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newPages.textContent = book.pages;
    newRead.textContent = book.read;

    newDelete.textContent = "Delete";
    newDelete.classList.add("delete");

    newRead.classList.add("readStatus");

    newTD.appendChild(newDelete);
    newReadTD.append(newRead);

    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newPages);
    newRow.appendChild(newReadTD);
    newRow.appendChild(newTD);

    const table = document.querySelector("tbody");
    const firstRow = table.querySelector("tr");

    if(firstRow) {
        table.insertBefore(newRow, firstRow);
    } else {
        table.appendChild(newRow);
    }


    const deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach(function(button) {
    button.onclick = function(e) {
    const deleteButton = e.target;
    const row = deleteButton.closest("tr");

    row.remove();
    }
    });

    const readButtons = document.querySelectorAll(".readStatus");

    readButtons.forEach(function(button) {
        button.onclick = function(e) {
            if (e.target.textContent == "Read") {
                e.target.textContent = "Not Read"
            } else {
                e.target.textContent = "Read";
            }
        }
    });
}


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
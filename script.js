const myLibrary = [];

// Storing input values in variables
let title = document.getElementById("bookTitle");
let author = document.getElementById("bookAuthor");
let pages = document.getElementById("bookPages");

// Storing submit button in a variable
const submitButton = document.getElementById("addButton");

// Creating function that stores and displays data
function addBookToLibrary(title, author, pages) {
    title = title.value;
    author = author.value;
    pages = pages.value;
    let read = document.querySelector('input[name="readInfo"]:checked');
    read = read.value;

    // Storing new book using Book object constructor
    const newBook = new Book(title, author, pages, read);
    
    /* Adding newBook object to myLibrary array
    and displaying it on the screen */

    myLibrary.push(newBook);
    displayBook(newBook);
}

/* Assigning function to the submit button, that
calls the addBookToLibrary function above */

submitButton.onclick = function(e) {
    e.preventDefault();
    addBookToLibrary(title, author, pages);
};

/* Creating prototype function that displays 
books to the screen */

function displayBook(book) {

    // Creating new html elements for displaying content
    const newRow = document.createElement("tr");
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newPages = document.createElement("td");
    const newReadTD = document.createElement("td");
    const newRead = document.createElement("button");
    const newTD = document.createElement("td");
    const newDelete = document.createElement("button");

    // Updating content of the html elements
    newTitle.textContent = book.title;
    newAuthor.textContent = book.author;
    newPages.textContent = book.pages;
    newRead.textContent = book.read;

    if (newRead.textContent == "Read"){
        newRead.style.backgroundColor = "rgb(124, 240, 95)";
    }else{
        newRead.style.backgroundColor = "rgb(245, 130, 130)";
    }

    newDelete.textContent = "Delete";
    newDelete.classList.add("delete");

    newRead.classList.add("readStatus");

    /* Adding elements created above as the child
    elements of particular tags */

    newTD.appendChild(newDelete);
    newReadTD.append(newRead);

    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newPages);
    newRow.appendChild(newReadTD);
    newRow.appendChild(newTD);

    // Displaying  new object as the first row
    const table = document.querySelector("tbody");
    const firstRow = table.querySelector("tr");

    if(firstRow) {
        table.insertBefore(newRow, firstRow);
    } else {
        table.appendChild(newRow);
    }

    // Declaring delete function for rows
    const deleteButtons = document.querySelectorAll(".delete");

    deleteButtons.forEach(function(button) {
    button.onclick = function(e) {
    const deleteButton = e.target;
    const row = deleteButton.closest("tr");

    row.remove();
    }
    });

    const readButtons = document.querySelectorAll(".readStatus");

    /* Declaring function, that changes 
    read status on the click */

    readButtons.forEach(function(button) {
        button.onclick = function(e) {
            if (e.target.textContent == "Read") {
                e.target.textContent = "Not Read"
                e.target.style.backgroundColor = "rgb(245, 130, 130)"
            } else {
                e.target.textContent = "Read";
                e.target.style.backgroundColor = "rgb(124, 240, 95)";
            }
        }
    });
}

// Declaring Book class

class Book {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}
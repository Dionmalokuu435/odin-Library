const myLibrary = [];

class Book {
  constructor(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}

function addBookToLibrary(title,author,pages,isRead){
    const myBook = Book(title,author,pages,isRead);
    myLibrary.push(myBook);
}
// 3 Write a functiion that loops through the array and displays
// each book on the page
function displayBooks(){
    myLibrary.innerHtml = "";
    myLibrary.forEach((book)=>{
        const div = document.createElement("div");
        div.dataset.id = book.id;

        div.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.isRead ? "Read" : "Not Read"}</p>

      <button class="toggle">Toggle</button>
      <button class="delete">Delete</button>
    `;
    // e shton librin ne faqe
    myLibrary.appendChild(div); 
    })
}

// 4 Odin kërkon:
// Me pas një “New Book” button
// Kur klikon → hapet një form
// Useri shkruan:
// title author pages readstatus
// Kur submit: Krijohet libri dhe shtohet ne array

const form = document.getElementById("bookForm");
form.addEventListener("sumbit",(e) =>{
    e.preventDefault();
    
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
      form.reset();
});

// Delete me fshi librin dhe toggle me ndryshu statusin

myLibrary.addEventListener("click",(e)=>{
    const id = e.target.parentElement.dataset.id;

    if(e.target.classList.contains("delete")){
        const index = myLibrary.findIndex((book)=> book.id === id);
        // e fshin librin
        myLibrary.splice(index, 1);
        displayBooks();
    }
    if(e.target.classList.contains("toggle")){
        const book = myLibrary.find((book)=> book.id === id);
        book.toggleRead();
        displayBooks();
    }
})

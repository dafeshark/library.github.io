const menuIndicator = document.querySelector(".menu_indicator");
const menuIndicatorParagraph = document.querySelector(".paragraph_indicator");
const menuIndicatorParagraph2 = document.querySelector(".paragraph_indicator2");
const container_library = document.querySelector(".library");
const menu = document.querySelector(".menu")


class Library {
static numberCollections = 0;
constructor(name, img) {
    this._name = name;
    this._img = img;
    this._number = ++Library.numberCollections;
}
get name() {
    return this._name;
}
set name(newName) {
    this._name = newName;
}
get totalCollections() {
    return this._number;
}
}


//objects(if you want a new library only create it and then create other case)
const collection1 = new Library(`chess`, `./images/collections/chess.png`);
const collection2 = new Library(`physics`, `./images/collections/physics.png`);
//infoBooks
const dataLibrary = Library.numberCollections;
let validation = null
let nameCollection = null
let lectureBook = ""


loadingLibrary();


function loadingLibrary(){
for (var a = 0; a < dataLibrary; a++) {
    var div = document.createElement(`div`);
    var p = document.createElement(`p`);
    div.classList.add("div_collection");
    p.classList.add("paragraph_collection");
    container_library.appendChild(div);
    div.appendChild(p);
    //add cases depends on the objects you have
    switch (a) {
    case 0:
        p.textContent = collection1.name
        div.style.backgroundImage = `url(${collection1._img})`
        div.addEventListener("click", () => {
        nameCollection = collection1.name
        validation = "chess"
        menuIndicatorActive();
        openBooks();
        })
        break;
    case 1:
        p.textContent = collection2.name
        div.style.backgroundImage = `url(${collection2._img})`;
        div.addEventListener("click", () => {
        nameCollection = collection2.name
        validation = "physics"
        menuIndicatorActive();
        openBooks();
        })
        break;
        //error card default
    default:
        error();
        break;
    }
}
}


function error(){
p.textContent = "error";
div.style.backgroundImage = `url(./images/collections/error.png)`;
}


class Books extends Library {
static numberBooks = 0;
constructor(name, bookImg, bookName) {
    super(name);
    this._bookImg = bookImg;
    this._bookName = bookName;
    this._number = ++Books.numberBooks;
}
get totalBooks() {
    return this._number;
}
}


//first collection
const book1 = new Books(`chess`, `./images/books/chess/chess1.png`, `chess1`);
const book2 = new Books(`chess`, `./images/books/chess/chess2.png`, `chess2`);
const book3 = new Books(`chess`, `./images/books/chess/chess3.png`, `chess3`);
const book4 = new Books(`chess`, `./images/books/chess/chess4.png`, `chess4`);
const book5 = new Books(`chess`, `./images/books/chess/chess5.png`, `chess5`);
const book6 = new Books(`chess`, `./images/books/chess/chess6.png`, `chess6`);
//second collection
const book7 = new Books(`physics`, `./images/books/physics/einstein.png`, `Einstein`);
const book8 = new Books(`physics`, `./images/books/physics/isaac.png`, `Newton`);
//book info
const dataBooks = Books.numberBooks;
//add books depend on the library (you must add books in the array)
const collectionBookMap = {
chess: [book1, book2,book3,book4,book5,book6],
physics: [book7,book8]
};


function createBookCard(book) {
var div = document.createElement(`div`);
var p = document.createElement(`p`);
var pSub = document.createElement(`p`);
div.classList.add("div_collection");
p.classList.add("paragraph_collection");
pSub.classList.add("paragraph_collection2");
div.style.backgroundImage = `url(${book._bookImg})`;
p.textContent = book._name;
pSub.textContent = book._bookName;
div.appendChild(p);
div.appendChild(pSub);
return div;
}

let verificationLectureBook = false; 
function openBooks() {
verificationLectureBook = true;
container_library.innerHTML = "";
//add cases depends on the number of books
switch (validation) {
    case "chess":
    const chessBooks = collectionBookMap.chess;
    chessBooks.forEach((book) => {
        const bookCard = createBookCard(book);
        container_library.appendChild(bookCard);
        bookCard.addEventListener("click",()=>{
        container_library.innerHTML = ""; 
        let lectureBook = book._bookName
        chessInfo(lectureBook);
        menuIndicatorActive(lectureBook);
        }); 
    });
    break;
    case "physics":
    const physicsBooks = collectionBookMap.physics;
    physicsBooks.forEach((book) => {
        const bookCard = createBookCard(book);
        container_library.appendChild(bookCard);
        bookCard.addEventListener("click",()=>{
          container_library.innerHTML = ""; //
        let lectureBook = book._bookName
        PhysicsInfo(lectureBook);
        menuIndicatorActive(lectureBook);
        }); 
    });
    break;
    //error card default
    default:
    error();
    break;
}
}

    var embed = document.createElement("embed");
    embed.type = "application/pdf"
    embed.classList.add("embed");
//books pdf
function chessInfo(lectureBook){
    container_library.appendChild(embed);
switch(lectureBook){
    case "chess1":
        embed.src = "./pdf/pdf1.pdf" 
    break
    case "chess2":
        embed.src = "./pdf/pdf2.pdf" 
    break
    case "chess3":
        embed.src = "./pdf/pdf3.pdf" 
        break
    case "chess4":
        embed.src = "./pdf/pdf4.pdf" 
        break
    case "chess5":
        embed.src = "./pdf/pdf5.pdf" 
        break
    case "chess6":
        embed.src = "./pdf/pdf6.pdf" 
        break
        //default error
    default:
        embed.src = "./pdf/error.pdf" 
    break
}
}

function PhysicsInfo(lectureBook){
    container_library.appendChild(embed);
switch(lectureBook){
    case "Einstein":
        embed.src = "./pdf/pdf7.pdf" 
    break
    case "Newton":
        embed.src = "./pdf/pdf8.pdf" 
    break
    //default error
    default :
    embed.src = "./pdf/error.pdf" 
    break
}
}

//menu indicator
function menuIndicatorActive(lectureBook){
menuIndicatorParagraph.textContent = nameCollection
    if(verificationLectureBook != false){
    menuIndicatorParagraph2.textContent = " >  " + lectureBook
}
}

menuIndicatorParagraph.addEventListener("click",()=>{
container_library.innerHTML = "";
    loadingLibrary();
menuIndicatorParagraph.textContent = ""
menuIndicatorParagraph2.textContent = ""
    verificationLectureBook = false;
})
menuIndicatorParagraph2.addEventListener("click",()=>{
    openBooks();
    menuIndicatorParagraph2.textContent = ""
})
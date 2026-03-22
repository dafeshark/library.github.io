📚 Library
A web-based digital library built with vanilla HTML, CSS, and JavaScript. Browse collections of books organized by category and read them directly in the browser as PDFs.
🌐 Live Demo
dafeshark.github.io/library.github.io
✨ Features

Browse book collections by category (Chess, Physics)
Click any book to open its PDF directly in the browser
Breadcrumb navigation to go back to collections or book list
Responsive grid layout (adapts to mobile screens)

🗂️ Project Structure
library.github.io/
├── index.html          # Main HTML file
├── script.js           # App logic (collections, books, navigation)
├── style.css           # Styles and responsive layout
├── images/
│   ├── collections/    # Cover images for each collection
│   └── books/
│       ├── chess/      # Cover images for chess books
│       └── physics/    # Cover images for physics books
└── pdf/                # PDF files for each book
📖 Collections
CollectionBooksChess6 books (chess1 – chess6)Physics2 books (Einstein, Newton)
🛠️ Tech Stack

HTML5 — structure
CSS3 — styling and responsive grid
Vanilla JavaScript — OOP with classes (Library, Books), dynamic DOM rendering
GitHub Pages — hosting

🚀 How to Run Locally
bashgit clone https://github.com/dafeshark/library.github.io.git
cd library.github.io
# Open index.html in your browser
No build step or dependencies required.
➕ How to Add a New Collection

Create a cover image in images/collections/ and images/books/<yourCollection>/
Add the PDF files to pdf/
In script.js:

Instantiate a new Library: const collection3 = new Library('name', './images/collections/name.png')
Add a new case in loadingLibrary() for the collection card
Instantiate Books objects for each book in the collection
Add the books array to collectionBookMap
Add a new case in openBooks() and a new info function (e.g. newCollectionInfo())



📄 License
Feel free to use and modify this project.

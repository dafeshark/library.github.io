<div align="center">
📚 Library
Your personal digital bookshelf, right in the browser
🌐 Live Demo →
</div>

🖼️ About
Library is a lightweight digital library built entirely with vanilla web technologies — no frameworks, no dependencies. Browse curated book collections and read PDFs directly in your browser, with a clean card-based UI and smooth navigation.

✨ Features
FeatureDescription🗂️ 
CollectionsBrowse books grouped by category📖
In-browser ReaderOpen PDFs without leaving the page🧭
Breadcrumb NavNavigate back to any level easily📱
ResponsiveAdapts to mobile and desktop screens⚡ 
Zero DependenciesPure HTML, CSS, and JS — no build step

📚 Current Collections
<div align="center">
🏆 Chess
⚛️ Physics
</div>

🗂️ Project Structure

📁 library.github.io/

├── 📄 index.html               # Entry point

├── 📜 script.js                # App logic — OOP classes & DOM rendering

├── 🎨 style.css                # Styles & responsive grid

│

├── 📁 images/

│   ├── 📁 collections/         # Collection cover images

│   └── 📁 books/

│       ├── 📁 chess/           # Chess book covers

│       └── 📁 physics/         # Physics book covers

│

└── 📁 pdf/                     # PDF files for each book

🛠️ Tech Stack

HTML5 — Semantic structure
CSS3 — Grid layout, responsive breakpoints, custom styling
JavaScript (ES6+) — OOP with class, dynamic DOM manipulation, event handling
GitHub Pages — Free static hosting with automatic deployment


🚀 Getting Started
bash# Clone the repository
git clone https://github.com/dafeshark/library.github.io.git

# Enter the project folder
cd library.github.io

# Open in your browser (no server needed)
open index.html

➕ Adding a New Collection

Add images → place cover in images/collections/ and book covers in images/books/<name>/
Add PDFs → drop your PDF files inside the pdf/ folder
Register the collection in script.js:

js// 1. Create the collection object
const collection3 = new Library('myCollection', './images/collections/myCollection.png');

// 2. Create book objects
const book9 = new Books('myCollection', './images/books/myCollection/book1.png', 'book1');

// 3. Add to the book map
const collectionBookMap = {
  chess: [...],
  physics: [...],
  myCollection: [book9]   // 👈 add here
};

Add a new case in loadingLibrary(), openBooks(), and a new info function.


📄 License
This project is open source and free to use. Feel free to fork it and build your own library! 🚀

<div align="center">
Made with ❤️ by dafeshark
</div>

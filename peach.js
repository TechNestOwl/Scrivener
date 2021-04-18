const mainContainer = document.querySelector("#main-container");
const bookTitle = document.querySelector("#bookTitle");
const publishDate = document.querySelector("#publishDate");
const bookDescription = document.querySelector("#bookDescription")
const fileContent = document.querySelector(".fileContent");
const infoBtn = document.querySelector("#infoBtn");

const getBook = async () => {
    const retrieveBook = await fetch("https://openlibrary.org/books/OL7465014M.json")
    let formattedBook = await retrieveBook.json();
    console.log(formattedBook);

    const bookPublishDate = formattedBook.publish_date;
    publishDate.innerHTML = bookPublishDate;
    
    const bookDescrip = formattedBook.first_sentence.value;
    bookDescription.innerHTML = bookDescrip;
    // console.log(formattedGatsby.description);

    const bookPublshier = formattedBook.publishers;
    publisher.innerHTML = bookPublshier;

}
infoBtn.addEventListener("click", function() {
    getBook();
})

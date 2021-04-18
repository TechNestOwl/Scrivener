const pubInfo = document.querySelector("#publishingInfo");
const bookTitle = document.querySelector("#bookTitle");
const publishDate = document.querySelector("#publishDate");
const bookDescription = document.querySelector("#bookDescription");
const fileContent = document.querySelector(".fileContent");
const infoBtn = document.querySelector("#infoBtn");
const publisher = document.querySelector("#publisher");

const getBook = async () => {
    const retrieveBook = await fetch("https://openlibrary.org/books/OL26491056M.json")
    let formattedBook = await retrieveBook.json();
    console.log(formattedBook);
    const bookPublishDate = formattedBook.publish_date;
    publishDate.innerHTML = bookPublishDate;
    const bookDescrip = formattedBook.description;
    bookDescription.innerHTML = bookDescrip;
    // console.log(formattedGatsby.description);
    const bookPublshier = formattedBook.publishers;
    publisher.innerHTML = bookPublshier;
}
infoBtn.addEventListener("click", function() {
    getBook();
})
// get text stats for selected book
function getDocStats(txtFile) {
    let docLength = document.getElementById("docLength");
    let wordCount = document.getElementById("wordCount");
    let charCount = document.getElementById("charCount");
    let text = txtFile.toLowerCase();
    let wordArray = text.match(/\b\S+\b/g);
    let wordDictionary = {};
    console.log(txtFile);
//     //Count every word in  wordArray
    for (let word in wordArray) {
        let wordValue = wordArray[word];
        if (wordDictionary[wordValue] > 0) {
            wordDictionary[wordValue] += 1;
        } else {
            wordDictionary[wordValue] = 1;
        }
    }
    docLength.innerText = "Document Length: " + text.length;
    wordCount.innerText = "Word Count: " + wordArray.length;
}
getDocStats(fileContent);
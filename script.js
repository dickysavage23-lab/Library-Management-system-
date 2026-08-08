const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.toLowerCase().trim();

    if (searchText === "") {
        alert("Please enter a book name.");
    } else if (searchText.includes("things fall apart")) {
        alert("Things Fall Apart - Available");
    } else if (searchText.includes("great gatsby")) {
        alert("The Great Gatsby - Available");
    } else if (searchText.includes("1984")) {
        alert("1984 - Borrowed");
    } else {
        alert("Sorry, book not found.");
    }
});

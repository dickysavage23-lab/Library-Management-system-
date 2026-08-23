const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

if (searchInput && searchButton) {
    searchButton.addEventListener("click", function () {
        const searchText = searchInput.value.toLowerCase().trim();

        if (searchText === "") {
            alert("Please enter a book name.");
            return;
        }

        if (searchText.includes("things")) {
            alert("Things Fall Apart - Available");
        } else if (searchText.includes("gatsby")) {
            alert("The Great Gatsby - Available");
        } else if (searchText.includes("1984")) {
            alert("1984 - Borrowed");
        } else {
            alert("Sorry, book not found.");
        }
    });
}
function borrowBook(bookName, statusId, buttonId) {
    const status = document.getElementById(statusId);
    const button = document.getElementById(buttonId);

    if (status) {
        status.textContent = "🔴 Borrowed";
        status.className = "borrowed";
    }

    if (button) {
        button.textContent = "Borrowed";
        button.disabled = true;
    }

    localStorage.setItem(bookName, "borrowed");

    alert(bookName + " has been borrowed successfully!");
}
window.addEventListener("DOMContentLoaded", function () {

    // THINGS FALL APART
    const thingsStatus = document.getElementById("things-status");
    const thingsButton = document.getElementById("things-button");

    if (localStorage.getItem("Things Fall Apart") === "borrowed") {

        if (thingsStatus) {
            thingsStatus.textContent = "🔴 Borrowed";
            thingsStatus.className = "borrowed";
        }

        if (thingsButton) {
            thingsButton.textContent = "Return Book";
            thingsButton.disabled = false;

            thingsButton.onclick = function () {
                returnBook(
                    "Things Fall Apart",
                    "things-status",
                    "things-button"
                );
            };
        }

    } else {

        if (thingsStatus) {
            thingsStatus.textContent = "🟢 Available";
            thingsStatus.className = "available";
        }

        if (thingsButton) {
            thingsButton.textContent = "Borrow Book";
            thingsButton.disabled = false;

            thingsButton.onclick = function () {
                borrowBook(
                    "Things Fall Apart",
                    "things-status",
                    "things-button"
                );
            };
        }
    }


    // THE GREAT GATSBY
    const gatsbyStatus = document.getElementById("gatsby-status");
    const gatsbyButton = document.getElementById("gatsby-button");

    if (localStorage.getItem("The Great Gatsby") === "borrowed") {

        if (gatsbyStatus) {
            gatsbyStatus.textContent = "🔴 Borrowed";
            gatsbyStatus.className = "borrowed";
        }

        if (gatsbyButton) {
            gatsbyButton.textContent = "Return Book";
            gatsbyButton.disabled = false;

            gatsbyButton.onclick = function () {
                returnBook(
                    "The Great Gatsby",
                    "gatsby-status",
                    "gatsby-button"
                );
            };
        }

    } else {

        if (gatsbyStatus) {
            gatsbyStatus.textContent = "🟢 Available";
            gatsbyStatus.className = "available";
        }

        if (gatsbyButton) {
            gatsbyButton.textContent = "Borrow Book";
            gatsbyButton.disabled = false;

            gatsbyButton.onclick = function () {
                borrowBook(
                    "The Great Gatsby",
                    "gatsby-status",
                    "gatsby-button"
                );
            };
        }
    }

});
function updateBookCounts() {
    let borrowedCount = 1;

    if (localStorage.getItem("Things Fall Apart") === "borrowed") {
        borrowedCount++;
    }

    if (localStorage.getItem("The Great Gatsby") === "borrowed") {
        borrowedCount++;
    }

    const totalBooks = 3;
    const availableCount = totalBooks - borrowedCount;

    const availableElement = document.getElementById("available-count");
    const borrowedElement = document.getElementById("borrowed-count");

    if (availableElement) {
        availableElement.textContent = availableCount;
    }

    if (borrowedElement) {
        borrowedElement.textContent = borrowedCount;
    }
}

window.addEventListener("DOMContentLoaded", updateBookCounts);
function updateDueDates() {
    let dueCount = 1;

    if (localStorage.getItem("Things Fall Apart") === "borrowed") {
        dueCount++;
    }

    if (localStorage.getItem("The Great Gatsby") === "borrowed") {
        dueCount++;
    }

    const dueElement = document.getElementById("due-count");

    if (dueElement) {
        dueElement.textContent = dueCount;
    }
}

window.addEventListener("DOMContentLoaded", updateDueDates);
function returnBook(bookName, statusId, buttonId) {
    const status = document.getElementById(statusId);
    const button = document.getElementById(buttonId);

    if (status) {
        status.textContent = "🟢 Available";
        status.className = "available";
    }

    if (button) {
        button.textContent = "Borrow Book";
        button.onclick = function () {
            borrowBook(bookName, statusId, buttonId);
        };
        button.disabled = false;
    }

    localStorage.removeItem(bookName);

    alert(bookName + " has been returned successfully!");
}
window.addEventListener("DOMContentLoaded", function () {
    const status = document.getElementById("things-status");
    const button = document.getElementById("things-button");

    if (localStorage.getItem("Things Fall Apart") === "borrowed") {
        if (status) {
            status.textContent = "🔴 Borrowed";
            status.className = "borrowed";
        }

        if (button) {
            button.textContent = "Return Book";
            button.onclick = function () {
                returnBook("Things Fall Apart", "things-status", "things-button");
            };
        }

    } else {
        if (status) {
            status.textContent = "🟢 Available";
            status.className = "available";
        }

        if (button) {
            button.textContent = "Borrow Book";
            button.onclick = function () {
                borrowBook("Things Fall Apart", "things-status", "things-button");
            };
        }
    }
});


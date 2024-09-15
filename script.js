const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");

let quotes = [];

// Function to fetch quotes from the JSON file
async function fetchQuotes() {
    try {
        const response = await fetch('quotes.json');
        quotes = await response.json();
        getQuote(); // Fetch a quote when quotes are loaded
    } catch (error) {
        console.error("Error fetching quotes:", error);
        quoteText.innerHTML = "Oops! Something went wrong.";
        authorText.innerHTML = "";
    }
}

// Function to display a random quote
function getQuote() {
    if (quotes.length === 0) {
        quoteText.innerHTML = "No quotes available.";
        authorText.innerHTML = "";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.innerHTML = `"${randomQuote.quote}"`;
    authorText.innerHTML = `- ${randomQuote.author}`;
}

// Event listener to fetch a new quote when the button is clicked
newQuoteButton.addEventListener("click", getQuote);

// Fetch quotes when the page loads
fetchQuotes();

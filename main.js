const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');

// **Replace this with your actual API endpoint URL**
const API_URL = 'quotes.json'; 

async function getNewQuote() {
    try {
        // 1. Fetch data from the API
        const response = await fetch(API_URL);
        
        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // 2. Parse the JSON data (assumes your API returns an array of quotes)
        const quotes = await response.json();
        
        // 3. Select a random quote from the array
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        // 4. Update the DOM elements
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `— ${quote.author}`;
        
    } catch (error) {
        // Handle any errors during the fetch or parsing process
        console.error('Could not fetch new quote:', error);
        quoteText.textContent = "Error loading quote. Please try again.";
        quoteAuthor.textContent = "";
    }
}

// Load a random quote on page load
window.addEventListener('DOMContentLoaded', getNewQuote);

// Add click event listener to button
newQuoteBtn.addEventListener('click', getNewQuote);
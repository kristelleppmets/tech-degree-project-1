/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
 * `quotes` array
 * date & citation only appear if this information is known
***/

let quotes = [
  {
    quote: "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
    source: "George Bernard Shaw",
    citation: "Everybody's Political What's What? Chapter XXXVII: Creed and Conduct, p. 330",
    year: "1944"
  },
  {
    quote: "Our knowledge of life is limited to death.",
    source: "Erich Maria Remarque",
    citation: "All Quiet on the Western Front",
    year: "1929"
  },
  {
    quote: "Have patience with everything that remains unsolved in your heart - live in the question.",
    source: "Rainer Maria Rilke",
    citation: "Letters to a Young Poet",
    year: "1929"

  },
  {
    quote: "One day I will find the right words, and they will be simple.",
    source: "Jack Kerouac",
    citation: "The Dharma Bums",
    year: "1958"
  },
  {
    quote: "No one really starts anything new, Mrs. Nemur. Everyone builds on other men’s failures. There is nothing really original in science. What each man contributes to the sum of knowledge is what counts.",
    source: "Daniel Keyes",
    citation: "Flowers for Algernon",
    year: "1959"
  },
  {
    quote: "An unexamined life is not worth living.",
    source: "Socrates",
    citation: "The Apology of Socrates",
    year: "399 BC"
  }
];

/***
 `getRandomQuote` function:
   * Creating a variable that generates a random number between zero and the last index in the `quotes` array
   * Using the random number variable to grab a random object from the `quotes` array, and storing it in a variable
   * Returning the variable storing the random quote object
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length) + 1;
  var quoteRandom = quotes[randomNumber];
  return quoteRandom;
};

/***
 `printQuote` function:
   * Creating a variable that calls the getRandomQuote() function
   * Creating a variable that initiates your HTML string with the first two elements, their classNames, and the quote and source properties
   * Using if statements to check if the citation and the year properties exists
   * If they do, concatenating the elements, appropriate classNames, and properties to the HTML string
   * Closing the HTML string
   * Setting the innerHTML of the quote-box div to equal the complete HTML string
***/

function printQuote() {
  var randomQuote = getRandomQuote();
  var quoteMessage = `<p class="quote">${randomQuote.quote}</p>`;
  quoteMessage += `<p class="source">${randomQuote.source}`;
    if (randomQuote.citation) {
      quoteMessage += `<span class="citation">${randomQuote.citation}</span>`;
    };
    if (randomQuote.year) {
      quoteMessage += `<span class="year">${randomQuote.year}</span>`;
    };
  quoteMessage += '</p>';
  document.getElementById('quote-box').innerHTML = quoteMessage;
};

 // Click event listener for the print quote button

document.getElementById('load-quote').addEventListener("click", printQuote, false);

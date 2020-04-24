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
    quote: "Progress is not in enhancing what is, but in advancing toward what will be.",
    source: "Khalil Gibran",
    citation: "A Handful of Sand on the Shore"
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    source: "Napoleon Hill",
    citation: "",
    year: ""
  },
  {
    quote: "One day I will find the right words, and they will be simple.",
    source: "Jack Kerouac",
    citation: "The Dharma Bums",
    year: "1958"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein",
    citation: "",
    year: "399 BC"
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
   * Creating a variable that initiates your HTML string
   * Using if statements to check if the citation and the year properties exists
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

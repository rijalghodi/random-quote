const QUOTES = [
  { quote: "Life isn’t about getting and having, it’s about giving and being.", author: "Kevin Kruse" },
  { quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill" },
  { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", author: "Robert Frost" },
  { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  {
    quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
  { quote: "Every strike brings me closer to the next home run.", author: "Babe Ruth" },
  { quote: "Definiteness of purpose is the starting point of all achievement.", author: "W. Clement Stone" },
  { quote: "We must balance conspicuous consumption with conscious capitalism.", author: "Kevin Kruse" },
  { quote: "Life is what happens to you while you’re busy making other plans.", author: "John Lennon" },
  { quote: "We become what we think about.", author: "Earl Nightingale" },
];

const COLORS = ["#9C2C77", "#FD841F", "#E14D2A", "#F73D93", "#16003B", "#413F42", "#393B44", "#8D93AB"];

let currentQuote = "";
let currentAuthor = "";

const getRandomQuote = () => {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
};

const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

const newQuote = () => {
  let randomQuote = getRandomQuote();
  currentQuote = randomQuote.quote;
  currentAuthor = randomQuote.author;
};

$(document).ready(function () {
  newQuote();
  $("#text").text(currentQuote);
  $("#author").text(currentAuthor);
  $(":root").css("--default-color", getRandomColor());
  $("#new-quote").click(function () {
    newQuote();
    $("#text").text(currentQuote);
    $("#author").text(currentAuthor);
    $(":root").css("--default-color", getRandomColor());
  });

  $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes,rijalghodi&text=" + encodeURIComponent('"' + currentQuote + '"  -' + currentAuthor));
});

window.onload = () => {
  fetch('https://quotes.rest/qod')
  .then(body => body.text())
  .then(body => {
    
    const resJSON = JSON.parse(body) 
    const quoteInfo = resJSON.contents.quotes[0];
    const quoteText = quoteInfo.quote;
    const quoteAuthor = quoteInfo.author;

    document.getElementById("quote").textContent = quoteText
    document.getElementById("author").textContent = `- ${quoteAuthor}`
  });

  startTime()
}
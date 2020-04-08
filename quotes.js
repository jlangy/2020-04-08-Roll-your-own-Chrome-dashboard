const quotes = async () => {
  try {
    const body = await fetch('https://quotes.rest/qod')
    const bodyText = await body.text();
    const resJSON = JSON.parse(bodyText) 
    const quoteInfo = resJSON.contents.quotes[0];
    const quoteText = quoteInfo.quote;
    const quoteAuthor = quoteInfo.author;
  
    document.getElementById("quote").textContent = quoteText
    document.getElementById("author").textContent = `- ${quoteAuthor}`
  }
  catch (err) {
    console.error(err);
  }
}

window.onload = () => {
  quotes();
  startTime();
}
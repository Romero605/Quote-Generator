function generate(){
    var quotes = {
        "- John Galsworthy" : '"Life calls the tune, we dance."',
        "- Aaron Lauritsen" : '"True friends do not come with conditions.""',
        "- Thanos" : '"Reality is often disappointing"',
        "- Future":  '"Issa evil world we live in."',
        "- Tyler" : '"Call me when you get lost!"'
    }

    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];
    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;

    
}

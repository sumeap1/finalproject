const quotes = [{
    quote: '“I guess there are never enough books.”',
    writer: '-John Steinbeck-'
},{
    quote: '“A reader lives a thousand lives before he dies” ',
    writer: '-George R.R. Martin-'
},{
    quote: '“If you do not like to read, you have not found the right book.”',
    writer: '-J.K. Rowling-'
},{
    quote: '"There is no friend as loyal as a book"',
    writer: '-Ernest Hemingway-'
},{
    quote: '"Reading is dreaming with your eyes open"',
    writer: '-Mark Twain-'
},{
    quote: '“Classic is a book which people praise and does not read.” ',
    writer: '-C.S. Lewis-'
},{
    quote: '"You are never alone when you are reading a book"  ',
    writer: '-George R.R. Martin-'
},{
    quote: '"A writer onlly begins a book. A reader finishes it" ',
    writer: '- Samuel Johnson-'
},]

let btn = document.querySelector("#Qbtn")
let quote = document.querySelector(".quote")
let writer = document.querySelector(".writer")

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})
/*
  Mian Muhammad Anwar, 02-10-2022
  print the quote and the name of its author
*/

export default class FamousQuote {
  famous_person: string = "Albert Einstein";
  message: string = "A person who never made a mistake never tried anything new.";

  returnFormattedQuote() {
    return this.famous_person + ' once said, \"' + this.message + '\"'
  }
}

let famousQuote = new FamousQuote();
console.log(famousQuote.returnFormattedQuote());

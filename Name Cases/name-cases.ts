/*
  Mian Muhammad Anwar, 02-10-2022
*/

export default class NameCases {
  userName: string = "Mian Muhammad Anwar";

  toTitleCase() {
    return this.userName.toLowerCase().split(' ').map((word) => {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }
}

let nameCases = new NameCases();
console.log(nameCases.userName.toLowerCase());
console.log(nameCases.userName.toUpperCase());
console.log(nameCases.toTitleCase());

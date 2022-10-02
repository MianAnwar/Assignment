/*
  Mian Muhammad Anwar, 02-10-2022
  this programm print the name with whitespaces around it and also print name without whitespaces
*/

export default class StrippingName {
  private name: string = "\t\n\t Albert Einstein \t\n\t";

  getName() {
    return this.name;
  }
}

let strippingName = new StrippingName();
console.log("-------------------------------")
console.log(strippingName.getName());
console.log("-------------------------------")
console.log(strippingName.getName().trim())
console.log("-------------------------------")

/*
  Mian Muhammad Anwar, 02-10-2022
  Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
*/

export default class NamesList {
  static names: string[] = [
    "Ali", "Zubair", "Sufran", "Kabir"
  ]
}

console.log(NamesList.names[0]);
console.log(NamesList.names[1]);
console.log(NamesList.names[2]);
console.log(NamesList.names[3]);

NamesList.names.forEach((name: string) => {
  console.log(`Hi ${name}! Welcome to my program.`)
})
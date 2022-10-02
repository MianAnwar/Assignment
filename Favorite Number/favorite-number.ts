/*
  Mian Muhammad Anwar, 02-10-2022
  print the message describing my favorite number
*/

export default class FavoriteNumber {
  private static number: number = 7;

  public static meesage() {
    return "My Favorite Number is " + this.number;
  }
}

console.log(FavoriteNumber.meesage())
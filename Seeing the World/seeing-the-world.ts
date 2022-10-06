export default class WorldList {
  //    • Store the locations in a array. Make sure the array is not in alphabetical order.
  static places: string[] = [
    "Dubai 1",
    "Switzerland 2",
    "Belgium 3",
    "Saudia 4",
    "Europe 5",
  ];

  static PrintOriginalList() {
    this.places.forEach((place: string) => {
      console.log(place);
    });
  }

  static PrintSortedASC() {
    console.log("\n\t\tSorted");
    [...this.places]
      .sort((x, y) => x.localeCompare(y))
      .forEach((place: string) => {
        console.log(place);
      });
  }

  static PrintSortedDSC() {
    console.log("\n\t\tSorted");
    [...this.places]
      .sort((x, y) => y.localeCompare(x))
      .forEach((place: string) => {
        console.log(place);
      });
  }
}

console.log(" \n\t\t• Print your array in its original order.");
WorldList.PrintOriginalList();
console.log("-----------------------------");

console.log(
  "\n\t\t• Print your array in alphabetical order without modifying the actual list."
);
WorldList.PrintSortedASC();
console.log("-----------------------------");

console.log(
  "\n\t\t• Print your array in reverse alphabetical order without changing the order of the original list."
);
WorldList.PrintSortedDSC();
console.log("-----------------------------");

console.log(
  "\n\t\t• Show that your array is still in its original order by printing it."
);
WorldList.PrintOriginalList();
console.log("-----------------------------");

console.log(
  "\n\t\t• Reverse the order of your list. Print the array to show that its order has changed."
);
WorldList.places
  .sort((x, y) => x.localeCompare(y))
  .forEach((place: string) => {
    console.log(place);
  });
console.log("-----------------------------");

console.log(
  "\n\t\t• Reverse the order of your list again. Print the list to show it’s back to its original order."
);
WorldList.places
  .sort((x, y) => x.localeCompare(y))
  .forEach((place: string) => {
    console.log(place);
  });
console.log("-----------------------------");

console.log(
  "\n\t\t• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed."
);
WorldList.places
  .sort((x, y) => x.localeCompare(y))
  .forEach((place: string) => {
    console.log(place);
  });
console.log("-----------------------------");

console.log(
  "\n\t\t• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed."
);
WorldList.places
  .sort((x, y) => x.localeCompare(y))
  .forEach((place: string) => {
    console.log(place);
  });
console.log("-----------------------------");

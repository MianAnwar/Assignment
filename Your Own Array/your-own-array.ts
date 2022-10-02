export default class TransportationMode {
  static favoriteTransp: string[] = [
    "Mercedes", "BMW", "Audi"
  ]
}

TransportationMode.favoriteTransp.forEach((transp: string) => {
  console.log(`I would like to own a ${transp} car.`)
})

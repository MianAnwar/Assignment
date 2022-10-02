var FavoriteNumber = /** @class */ (function () {
    function FavoriteNumber() {
    }
    FavoriteNumber.meesage = function () {
        return "My Favorite Number is " + this.number;
    };
    FavoriteNumber.number = 7;
    return FavoriteNumber;
}());
console.log(FavoriteNumber.meesage());

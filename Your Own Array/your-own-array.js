"use strict";
exports.__esModule = true;
var TransportationMode = /** @class */ (function () {
    function TransportationMode() {
    }
    TransportationMode.favoriteTransp = [
        "Mercedes", "BMW", "Audi"
    ];
    return TransportationMode;
}());
exports["default"] = TransportationMode;
TransportationMode.favoriteTransp.forEach(function (transp) {
    console.log("I would like to own a ".concat(transp, " car."));
});

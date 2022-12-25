function ConvertHandler() {
  this.getNum = function (input) {
    const result = input.match(/^[0-9]+/)[0];
    return result;
  };

  this.getUnit = function (input) {
    const result = input.match(/[a-z]+$/i)[0];
    return result;
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const initialUnit = initUnit.toLowerCase();
    const initialNumber = Number(initNum);

    switch (initialUnit) {
      case "mi":
        return initialNumber * miToKm;

      case "km":
        return initialNumber / miToKm;

      case "lbs":
        return initialNumber * lbsToKg;

      case "kg":
        return initialNumber / lbsToKg;

      case "gal":
        return initialNumber * galToL;

      case "l":
        return initialNumber / galToL;

      default:
        return "Invalid initial unit.";
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;

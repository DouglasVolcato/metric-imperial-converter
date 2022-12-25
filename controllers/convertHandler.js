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
    const initialUnit = initUnit.toLowerCase();

    switch (initialUnit) {
      case "mi":
        return "km";

      case "km":
        return "mi";

      case "lbs":
        return "kg";

      case "kg":
        return "lbs";

      case "gal":
        return "L";

      case "l":
        return "gal";

      default:
        return "Invalid initial unit.";
    }
  };

  this.spellOutUnit = function (unit) {
    const givenUnity = unit.toLowerCase()
    switch (givenUnity) {
      case "mi":
        return "miles";

      case "km":
        return "kilometers";

      case "lbs":
        return "pounds";

      case "kg":
        return "kilograms";

      case "gal":
        return "gallons";

      case "l":
        return "liters";

      default:
        return "Invalid initial unit.";
    }
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
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;

function roundNum(num) {
  return Math.round(Number(num) * 100000) / 100000;
}

function throwInvalidUnitError() {
  throw new Error("invalid unit");
}

function throwInvalidNumberError() {
  throw new Error("invalid number");
}

function ConvertHandler() {
  this.getNum = function (input) {
    const result = input.match(/^(\-)*[0-9]+/);
    if(result === null){
      return 1
    }
    if (result[0] <= 0) {
      throwInvalidNumberError();
    }
    return roundNum(result[0]);
  };

  this.getUnit = function (input) {
    const result = input.match(/[a-z]+$/i)[0];
    return result.toLowerCase() === "l" ? "L" : result.toLowerCase();
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
        return throwInvalidUnitError();
    }
  };

  this.spellOutUnit = function (unit) {
    const givenUnity = unit.toLowerCase();
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
        return throwInvalidUnitError();
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
        return roundNum(initialNumber * miToKm);

      case "km":
        return roundNum(initialNumber / miToKm);

      case "lbs":
        return roundNum(initialNumber * lbsToKg);

      case "kg":
        return roundNum(initialNumber / lbsToKg);

      case "gal":
        return roundNum(initialNumber * galToL);

      case "l":
        return roundNum(initialNumber / galToL);

      default:
        return throwInvalidUnitError();
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;

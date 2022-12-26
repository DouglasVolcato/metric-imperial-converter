function roundNum(num) {
  return Math.round(Number(num) * 100000) / 100000;
}

function ConvertHandler() {
  this.getNum = function (input) {
    const englishAlphabet = /[a-zA-Z]/;
    const idx = input.split("").findIndex((char) => englishAlphabet.test(char));
    if (idx === 0) {
      return 1;
    }

    let quantityStr;
    if (idx < 0) {
      quantityStr = input.slice(0);
    } else {
      quantityStr = input.slice(0, idx);
    }

    const quantityArr = quantityStr.split("/");

    if (quantityArr.length === 1) {
      const quantity = quantityArr[0];
      if (quantity === "") return false;
      return isNaN(+quantity) ? false : +quantity;
    }
    if (quantityArr.length === 2) {
      if (quantityArr.some((num) => num === "")) {
        return false;
      }
      const numerator = +quantityArr[0];
      const denominator = +quantityArr[1];
      return isNaN(numerator) || isNaN(denominator)
        ? false
        : numerator / denominator;
    }

    return false;
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
        return false;
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
        return false;
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
        return 0;
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
  };
}

module.exports = ConvertHandler;

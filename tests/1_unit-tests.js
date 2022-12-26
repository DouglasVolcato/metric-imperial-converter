const chai = require("chai");
const ConvertHandler = require("../controllers/convertHandler.js");

function makeSut() {
  const convertHandler = new ConvertHandler();
  return { convertHandler };
}

suite("Unit Tests", function () {
  test("convertHandler should correctly read a whole number input.", (done) => {
    const { convertHandler } = makeSut();
    const number = convertHandler.getNum("20l");
    chai.expect(number).to.eql(20);
    done();
  });

  test("convertHandler should correctly read a decimal number input.", (done) => {
    const { convertHandler } = makeSut();
    const number = convertHandler.getNum("20.10l");
    chai.expect(number).to.eql(20.1);
    done();
  });

  test("convertHandler should correctly read a fractional input.", (done) => {
    const { convertHandler } = makeSut();
    const number = convertHandler.getNum("1/2l");
    chai.expect(number).to.eql(0.5);
    done();
  });

  test("convertHandler should correctly read a fractional input with a decimal.", (done) => {
    const { convertHandler } = makeSut();
    const number = convertHandler.getNum("10.20/2.0l");
    chai.expect(number).to.eql(5.1);
    done();
  });

  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", (done) => {
    const { convertHandler } = makeSut();
    const error = convertHandler.getNum("3/2/3l");
    chai.expect(error).to.eql(false);
    done();
  });

  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", (done) => {
    const { convertHandler } = makeSut();
    const number = convertHandler.getNum("l");
    chai.expect(number).to.eql(1);
    done();
  });

  test("convertHandler should correctly read each valid input unit.", (done) => {
    const { convertHandler } = makeSut();
    const inputUnits = ["mi", "km", "lbs", "kg", "gal", "L"];
    for (const unit of inputUnits) {
      const gotUnit = convertHandler.getUnit("10" + unit);
      chai.expect(gotUnit).to.eql(unit);
    }
    const gotUnit = convertHandler.getUnit("10" + "l");
    chai.expect(gotUnit).to.eql("L");
    done();
  });

  test("convertHandler should correctly return an error for an invalid input unit.", (done) => {
    const { convertHandler } = makeSut();
    const gotUnit = convertHandler.getReturnUnit("10wrongUnit");
    chai.expect(gotUnit).to.eql(false);
    done();
  });

  test("convertHandler should return the correct return unit for each valid input unit.", (done) => {
    const { convertHandler } = makeSut();
    const inputUnits = ["mi", "km", "lbs", "kg", "gal", "L"];
    const returnUnits = ["km", "mi", "kg", "lbs", "L", "gal"];
    for (let i = 0; i < inputUnits.length; i++) {
      const gotUnit = convertHandler.getReturnUnit(inputUnits[i]);
      chai.expect(gotUnit).to.eql(returnUnits[i]);
    }
    done();
  });

  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", (done) => {
    const { convertHandler } = makeSut();
    const units = ["km", "mi", "kg", "lbs", "L", "gal"];
    const spelledOutUnits = [
      "kilometers",
      "miles",
      "kilograms",
      "pounds",
      "liters",
      "gallons",
    ];
    for (let i = 0; i < units.length; i++) {
      const spelledUnit = convertHandler.spellOutUnit(units[i]);
      chai.expect(spelledUnit).to.eql(spelledOutUnits[i]);
    }
    done();
  });

  test("convertHandler should correctly convert gal to L.", (done) => {
    const { convertHandler } = makeSut();
    const convertedNumber = convertHandler.convert(10, "gal");
    chai.expect(convertedNumber).to.eql(37.8541);
    done();
  });

  test("convertHandler should correctly convert L to gal.", (done) => {
    const { convertHandler } = makeSut();
    const convertedNumber = convertHandler.convert(10, "L");
    chai.expect(convertedNumber).to.eql(2.64172);
    done();
  });

  test("convertHandler should correctly convert mi to km.", (done) => {
    const { convertHandler } = makeSut();
    const convertedNumber = convertHandler.convert(10, "mi");
    chai.expect(convertedNumber).to.eql(16.0934);
    done();
  });

  test("convertHandler should correctly convert km to mi.", (done) => {
    const { convertHandler } = makeSut();
    const convertedNumber = convertHandler.convert(10, "km");
    chai.expect(convertedNumber).to.eql(6.21373);
    done();
  });

  test("convertHandler should correctly convert lbs to kg.", (done) => {
    const { convertHandler } = makeSut();
    const convertedNumber = convertHandler.convert(10, "lbs");
    chai.expect(convertedNumber).to.eql(4.53592);
    done();
  });

  test("convertHandler should correctly convert kg to lbs.", (done) => {
    const { convertHandler } = makeSut();
    const convertedNumber = convertHandler.convert(10, "kg");
    chai.expect(convertedNumber).to.eql(22.04624);
    done();
  });
});

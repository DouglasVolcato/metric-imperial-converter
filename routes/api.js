"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.get("/api/convert", (req, res) => {
    const input = req.query.input;

    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    const spelledInitUnit = convertHandler.spellOutUnit(initUnit);
    const spelledReturnUnit = convertHandler.spellOutUnit(returnUnit);

    const returnString = convertHandler.getString(
      initNum,
      spelledInitUnit,
      returnNum,
      spelledReturnUnit
    );

    res.send({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: returnString,
    });
  });
};

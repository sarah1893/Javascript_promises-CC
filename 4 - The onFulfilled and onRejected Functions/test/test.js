const logs = [];
console.log = (val) => {logs.push(val)} 
const { expect } = require('chai')
const rewire = require('rewire');
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let ifSucceed
        try {
            ifSucceed = appModule.__get__("ifSucceed");
        } catch (e) {
            expect(true, 'Did you create `ifSucceed()`?').to.equal(false);
        }
        expect(ifSucceed, "`ifSucceed()` should be a function.").to.be.an.instanceOf(Function);
        
      ifSucceed('cat')
        expect(logs[logs.length-1]==='cat', "Your `ifSucceed()` function should log to the console the value passed into it.").to.equal(true);
    });
});
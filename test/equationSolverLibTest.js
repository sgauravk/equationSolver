const assert = require("assert");
const {revSign, chkIndex} = require("../src/equationSolverLib.js");

describe('chkIndex', function() {
  it('should return index of given operator', function() {
    assert.deepEqual(chkIndex([1,2,3,4,"+"],"+"),4);
    assert.deepEqual(chkIndex(["+"],"+"),0);
  });
  it('should return undefined when empty array is provided', function() {
    assert.deepEqual(chkIndex([]),undefined);
  });
  it('should return undefined when array is not defined', function() {
    assert.deepEqual(chkIndex(""),undefined);
  });
});

describe('revSign', function() {
  it('should send reverse operator', function() {
    assert.deepEqual(revSign("+"),"-");
    assert.deepEqual(revSign("*"),"/");
    assert.deepEqual(revSign("/"),"*");
    assert.deepEqual(revSign("-"),"+");
  });
});


const assert = require("assert");
const {revOperator, checkIndex} = require("../src/equationSolverLib.js");

describe('checkIndex', function() {
  it('should return index of given operator', function() {
    assert.deepEqual(checkIndex([1,2,3,4,"+"],"+"),4);
    assert.deepEqual(checkIndex(["+"],"+"),0);
  });
  it('should return undefined when empty array is provided', function() {
    assert.deepEqual(checkIndex([]),undefined);
  });
  it('should return undefined when array is not defined', function() {
    assert.deepEqual(checkIndex(""),undefined);
  });
});

describe('revOperator', function() {
  it('should send reverse operator', function() {
    assert.deepEqual(revOperator("+"),"-");
    assert.deepEqual(revOperator("*"),"/");
    assert.deepEqual(revOperator("/"),"*");
    assert.deepEqual(revOperator("-"),"+");
  });
});


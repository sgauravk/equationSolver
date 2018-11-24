const {chkSide} = require("./src/equationSolverLib.js");

const main = function(){
  let equation = process.argv[2];
  let eqnArray = equation.split('=');
  let LHS = (eqnArray[0]);
  let RHS = (eqnArray[1]);
  console.log('x =',chkSide(LHS,RHS));
};
main();

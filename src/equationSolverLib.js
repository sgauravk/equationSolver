const chkIndex = function(list,char){
  for(let index=0; index<list.length; index++){
    if(list[index] == char){
      return index;
    }
  }
};

const revSign = function(operator){
  let symbols = ['+','-','*','/'];
  let oppSymbol = ['-','+','/','*'];
  let index = chkIndex(symbols,operator);
  return oppSymbol[index];
}

const revCal = function(equation){
  let result = [];
  for(let index=0; index<equation.length; index++){
    if(equation[index] == '+' || equation[index] == '-' ||
      equation[index] == '*' || equation[index] == '/'){
      result.push(revSign(equation[index]));
      break;
    }
  }
  result = result.concat(equation.slice(result.length-1));
  return eval(result.join(''));
};

const deleteElement = function(list,elementToDlt){
  let startIndex = chkIndex(list,elementToDlt[0]);
  let array = list.split('');
  array.splice(startIndex,elementToDlt.length);
  return array.join('');
};

const filterVar = function(string){
  let result = [];
  let index = chkIndex(string,'x');
  while(string[index] != '+' && string[index] != '-' &&
    string[index] != '*' && string[index] != '/' && index != 0){
    result.unshift(string[index]);
    index--;
  }
  let index2 = chkIndex(string,result[0]);
  result.unshift(string[index2-1]);
  return result.join('');
};

const chkSide = function(LHS,RHS){
  if (RHS.includes('x')){
    side = RHS;
    side2 = eval(LHS);
  } else {
    side = LHS;
    side2 = eval(RHS);
  }
  side2 = revCal(""+side2 + sideEvel(side));
  let constant = filterVar(side).split('');
  constant.pop();
  return side2/constant.join('');
}

const sideEvel = function(side,LHS,RHS){
  let calculation = ""+eval(deleteElement(side,filterVar(side)));
  return '- '+calculation;
}

module.exports = {chkSide, chkIndex, revSign};

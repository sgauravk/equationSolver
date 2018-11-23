const checkIndex = function(list,char){
  for(let index=0; index<list.length; index++){
    if(list[index] == char){
      return index;
    }
  }
};

const revOperator = function(operator){
  let symbols = ['+','-','*','/'];
  let oppSymbol = ['-','+','/','*'];
  let index = checkIndex(symbols,operator);
  return oppSymbol[index];
}

module.exports = {checkIndex, revOperator};

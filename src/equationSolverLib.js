const checkIndex = function(list,char){
  for(let index=0; index<list.length; index++){
    if(list[index] == char){
      return index;
    }
  }
};

module.exports = {checkIndex}

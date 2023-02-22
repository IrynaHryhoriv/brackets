module.exports = function check(str, bracketsConfig) {

  let countStr = str;
  let i = 0;

  function cleansDouble (){
    bracketsConfig.forEach(function(item){
    countStr = countStr.replace(`${item[0]}${item[1]}`, '');
    }
    )};
        
    do{
    cleansDouble (); i++; } while (i < 50);
       
     let result = (countStr.length === 0) ? true : false;
        
    return result;
}

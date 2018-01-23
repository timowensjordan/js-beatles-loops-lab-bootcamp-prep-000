function theBeatlesPlay(musicians,instrument){
  var array=[];
  for (let i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return array;
}
function johnLennonFacts(){
  
}
function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push("I love the Beatles!");
    n++;
  }while (n<15);
  return array;
}
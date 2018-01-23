function theBeatlesPlay(musicians,instrument){
  var array=[];
  for (let i=0;i<musicians.length;i++){
    array.push(`${musicians[i]} plays ${instrument[i]}`);
  }
  return array;
}
function johnLennonFacts(){
  const facts=["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];
  var array=[];
  var i=0;
  while (i<facts.length){
    return array.push(facts[i]+'!!!');
  }
}
function iLoveTheBeatles(n){
  var array=[];
  do{
    array.push("I love the Beatles!");
    n++;
  }while (n<15);
  return array;
}
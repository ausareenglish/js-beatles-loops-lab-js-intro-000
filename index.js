// add solution here
function theBeatlesPlay(musicians, instruments) {
  // declaring and assigning empty array
  var beatlesPlay = [];
  // 'for loop' that iterates over array of musicians
  for (let i = 0; i < musicians.length; i++ ) {
      //create a new string from musician and instrument arrays
      
      beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}` )
  }
  // return the array of new array of strings containing what instruments each
  // musician plays
  
  return beatlesPlay;
}

function johnLennonFacts(lennonFacts) {
  
  // creates variable wih empty array 
  
  let facts2 = [];
  
  let i = 0;

// for loop that adds "!!!" to ever index in new array

  while (i < lennonFacts.length) {
  
   facts2.push(lennonFacts[i] + "!!!");
   i++;
  }
  
  return facts2;
  
  
}


function iLoveTheBeatles() {
  
  
  
  
  
  
  
  
}

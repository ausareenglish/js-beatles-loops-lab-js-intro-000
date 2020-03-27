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


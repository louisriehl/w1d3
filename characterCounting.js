

function countLetters (string)
{
  var noSpaces = string.split(' ').join('');
  var numberOfCharacters = {};


  for (var l = 0; l < noSpaces.length; l++)
  {
    var char = noSpaces.charAt(l);
    // console.log(char);
    if (char in numberOfCharacters)
    {
      numberOfCharacters[char] += 1;
    }
    else
    {
      numberOfCharacters[char] = 1;
    }
  }
  return numberOfCharacters;
  // console.log(noSpaces);
}

// countLetters('this is my first string');
console.log(countLetters('lighthouse in the house'));
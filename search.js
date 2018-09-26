// File for messing around with 'string'.search

var database = {
  thing1: {
    identifier: 'trippy'
  },
  thing2: {
    identifier: 'dippy'
  },
  thing3: {
    identifier: 'sTripy'
  }
}

function searchFor (string)
{
  string = new RegExp(string, 'i');
  for (var thing in database)
  {
    console.log("Check if", string, "is in", database[thing]['identifier']);
    console.log(database[thing]['identifier'].search(string));
  }
}

function toRegEx(string){
  return "/" + string + "/gi";
}

searchFor("tri");
var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }


};

  function returnUsersOnId (idArray) // when given an array of ids, returns the users they correspond to
  {
    var string = "";
    // console.log(idArray);
    // console.log(this.f01.name);
    for (var i = 0; i < idArray.length; i++)
    {
      var id = idArray[i];
      string += data[id]['name'] + " ";
    }
    return string;
  }

  function printAllFollowing() // print who each user is following
  {
    for (var users in data)
    {
      var following = "";
      following += data[users]['name'] + ' follows : ';
      following += returnUsersOnId(data[users]['follows']);
      console.log(following);
    }
  }

  printAllFollowing();
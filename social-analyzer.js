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

function returnUsersOnId (idArray) // when given an array of ids, returns the names of the users they correspond to
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

function printWhat(string) // prints lists of names based on what is needed, querying with an array of ids
{
  var tag;
  var attribute;

  if (string === 'following')
  {
    tag = " follows : ";
    attribute = 'follows';
  }
  else if (string === 'followers')
  {
    tag = " is followed by : ";
    attribute = 'followedBy';
  }

  for (var users in data)
  {
    var response = '';
    response += data[users]['name'] + tag;
    response += returnUsersOnId(data[users][attribute]);
    console.log(response);
  }
}

(function setFollowing()
{

  function setter() //adds followedBy property to each object
  {
    for (var each in data)
    {
      data[each]['followedBy'] = [];
    }
  }

  setter();

  //get the follows array of each user
  for (var user in data)
  {
    var followsArray = data[user]['follows'];
    // console.log(data[user]['name'], 'follows', followsArray);
    for (var i = 0; i < followsArray.length; i++)
    {
      data[followsArray[i]]['followedBy'].push(user);
      // console.log(data[followsArray[i]]['followedBy']);
    }
  }

})();

// printAllFollowing();

function statChecker()
{
  var most = {followers: {name: "", count: 0}, following: {name: "", count: 0} };
  for (var users in data)
  {
    if (data[users]['followedBy'].length > most['followers']['count'])
    {
      most['followers']['name'] =  data[users]['name'];
      most['followers']['count'] = data[users]['followedBy'].length;
    }

     if (data[users]['follows'].length > most['following']['count'])
    {
      most['following']['name'] =  data[users]['name'];
      most['following']['count'] = data[users]['follows'].length;
    }
  }
  //console.log(most);

  function statPrint()
  {
    var string = "";
    string += most['followers']['name'] + ' has the most followers, with ' + most['followers']['count'] + ' followers!';
    string += "\n" + most['following']['name'] + ' follows the most users, with ' + most['following']['count'] + ' users followed!';
    return string;
  }
  return statPrint();
}

function ageStatChecker(age) //takes an age parameter and returns object containing who has the most followers/is being followed by members abive that age
{
  var most = {followers: {name: "", count: 0}, following: {name: "", count: 0} };
  for (var users in data)
  {
    var followerArray = data[users]['followedBy'];
    var counter = 0;
    for (var i = 0; i < followerArray.length; i++)
    {
      if (data[followerArray[i]]['age'] > age)
        counter++;
    }
    if (counter > most['followers']['count'])
    {
      most['followers']['name'] = data[users]['name'];
      most['followers']['count'] = counter;
    }
    var followingArray = data[users]['follows'];
    counter = 0;
    for (var i = 0; i < followingArray.length; i++)
    {
      if (data[followingArray[i]]['age'] > age)
        counter++;
    }
    if (counter > most['following']['count'])
    {
      most['following']['name'] = data[users]['name'];
      most['following']['count'] = counter;
    }
  }

  function statPrint()
  {
    var string = "";
    string += most['followers']['name'] + ' has the most followers over ' + age + ' , with ' + most['followers']['count'] + ' followers!';
    string += "\n" + most['following']['name'] + ' follows the most users over ' + age + ', with ' + most['following']['count'] + ' users followed!';
    return string;
  }
  return statPrint();

}

console.log(ageStatChecker(30));

// (function over30 ()
// {
//   for (var users in data)
//   {
//     if (data[users]['age'] > 30)
//       data[users]['isOver30'] = true;
//     else
//       data[users]['isOver30'] = false;
//   }
// })();

// setFollowing();
printWhat('followers');
console.log(statChecker());
// printAllFollowers();
// printAllFollowing();
// console.log(data);
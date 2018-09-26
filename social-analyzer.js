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
  },

  printFollowerOnID: function (idArray) // when given an array of ids, prints the users they correspond to
  {
    // console.log(idArray);
    // console.log(this.f01.name);
    for (var i = 0; i < idArray.length; i++)
    {
      var id = idArray[i];
      console.log(this[id]['name']);
    }
  },

  // printAllFollowers: function()
  // {
  //   for (var user in this)
  //   {
  //     console.log(this[user]['follows']);
  //     console.log(this[user]['name'], "follows", this.printFollowerOnID(this[user]['follows']));
  //   }
  // }
};
// data.printAllFollowers();
data.printFollowerOnID(["f02", "f03", "f04"]);
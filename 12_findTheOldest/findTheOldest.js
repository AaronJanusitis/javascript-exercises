const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
      const currentYear = (new Date()).getFullYear();
      if(!b.yearOfDeath) b.yearOfDeath = currentYear;
      const lastPerson = a.yearOfDeath - a.yearOfBirth;
      const nextPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
  });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;

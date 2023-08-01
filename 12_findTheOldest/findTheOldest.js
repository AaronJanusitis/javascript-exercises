const findTheOldest = function(people) {
    let oldest = "";
    let earliest = 2023;
    people.forEach(person => {
        if (person.yearOfBirth < earliest){
          oldest = person;
        }
       });
};

// Do not edit below this line
module.exports = findTheOldest;

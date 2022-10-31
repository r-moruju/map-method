  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [1, 2, 3, 4]

const total = nums.reduce((acc, curr) => acc + curr, 10);
//console.log(total);

const teamMembers = [
    {
      name: 'Andrew',
      profession: 'Developer',
      yrsExperience: 5
    },
    {
      name: 'Ariel',
      profession: 'Developer',
      yrsExperience: 7
    },
    {
      name: 'Michael',
      profession: 'Designer',
      yrsExperience: 1
    },
    {
      name: 'Kelly',
      profession: 'Designer',
      yrsExperience: 3
    },
    {
      name: 'Tom',
      profession: 'Manager',
      yrsExperience: 12
    }
  ];
  
  // Totaling a specific object property
  let totalExperiance = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  //console.log(totalExperiance);
  // Grouping by a property, and totaling it too

  let groupingYears = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]){
        acc[key] = curr.yrsExperience
    } else {
        acc[key] += curr.yrsExperience
    }
    return acc
  }, {})

  console.log(groupingYears);

  let groupingNames = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]){
        acc[key] = [curr.name]
    } else {
        acc[key].push(curr.name)
    }
    return acc
  }, {})

  console.log(groupingNames);


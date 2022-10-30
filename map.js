  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let upNums =[];
for (let num of nums) {
  upNums.push(num*2);
}
//console.log(upNums);
// Using map()
const callBackFunction = function(num) {
  return num * 2
}
let upNumsMap = nums.map(callBackFunction)
//console.log(upNumsMap)

// Simplified w/ map()


// Simplfied w/ map() + arrow function
const simpleMap = nums.map(num => num*2);
//console.log(simpleMap);
// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const selectId = students.map(student => [student.id, student.name]);
//console.log(selectId);

students.map(student => {
  if (student.name == 'Ariel') {
    student.age = 31;
  }
  if (student.name == 'Jason') {
    student.age = 33;
  }
  if (student.name == 'Mark') {
    student.age = 40;
  }
});
//console.log(students);

const selectMark = students.map(function(student){
  if (student.name == 'Mark'){
    return {student}
  }
})

console.log(selectMark);
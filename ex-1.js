// Exercise #1: For Each Function

function forEach(callbackOperation,array, bonus) {
  for (let i=0; i < array.length; i++) {
  newEmployeeSalaries.push(callbackOperation(array[i], bonus));
  }
}

function addBonus(salary, bonus) {
  return salary + bonus;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

forEach(addBonus,employeeSalaries, 5000)
console.log(newEmployeeSalaries);
const employee = {
  name: "Randy",
  streetAddress: "13110 pear",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
  const newEmployee = { ...deleteFromEmployeeByKey.key };
  newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

const newEmployees = (modifyEmployess) => {
  const employees = {
    id1: modifyEmployess('Pedro Guerra'),
    id2: modifyEmployess('Luiza Drumond'),
    id3: modifyEmployess('Carla Paiva'),
  };
  return employees;
};

const modifyEmployess = (fullname) => {
  const email = fullname.toLowerCase();
  return email;
};

console.log(newEmployees(modifyEmployess));

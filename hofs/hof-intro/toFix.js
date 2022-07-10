const func1 = () => {
  return 'Acordando!!';
};

const func2 = () => {
  return 'Bora tomar café!!';
};

const func3 = () => {
  return 'Partiu domir!!';
};

const doingThings = (call) => {
  // const result = call();
  console.log(call());
};

doingThings(func1);

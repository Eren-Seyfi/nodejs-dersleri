function useState(initialValue) {
  let _val = initialValue;

  const get = () => _val;

  const set = (newVal) => {
    _val = newVal;
    console.log("State updated:", _val);
  };

  return [get, set];
}

// Kullanım:
const [getCount, setCount] = useState(0);

console.log(getCount()); // 0

setCount(5); // State updated: 5

console.log(getCount()); // 5

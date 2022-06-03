const calAverage = (data) => {
  if (data.length === 0) {
    return ` Age Average : 0`;
  } else {
    const tab = [];
    data.map((ele) => {
      tab.push(ele.Age);
      return "";
    });

    const average = tab.reduce((a, b) => a + b, 0) / tab.length;
    return ` Age Average :${average.toFixed(2)}`;
  }
};

const calcEcartType = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    let tab = [];
    arr.map((ele) => {
      tab.push(ele.Age);
      return "";
    });
    let mean =
      tab.reduce((acc, curr) => {
        return acc + curr;
      }, 0) / tab.length;
    tab = tab.map((k) => {
      return (k - mean) ** 2;
    });
    let sum = tab.reduce((acc, curr) => acc + curr, 0);
    // let variance = sum / tab.length;
    return Math.sqrt(sum / tab.length).toFixed(2);
  }
};

const filterSex = (data, sex) => {
  const newTab = [...data];

  const result = newTab.filter((ele) => ele.Sex === sex);
  return result;
};
const filterPclass = (data, Pclass) => {
  const newTab = [...data];
  const result = newTab.filter((ele) => ele.Pclass === Pclass);
  return result;
};
const filterEmbarked = (data, Embarked) => {
  const newTab = [...data];
  const result = newTab.filter((ele) => ele.Embarked === Embarked);
  return result;
};
export { filterEmbarked, filterSex, filterPclass, calcEcartType, calAverage };

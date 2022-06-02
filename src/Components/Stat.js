import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import axios from "axios";

const Stat = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [age, setAge] = useState("");
  const [pclass, setPclass] = useState(0);
  const [sex, setSex] = useState("");
  const [data, setData] = useState([]);
  const [survived, setSurvived] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/search?Pclass=${Number(pclass) === 0 ? "" : pclass}&Sex=${sex}&Age=${age}&Survived=${survived ? true : ""}`);
        setData(response.data.customers);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [age, pclass, sex, survived]);

  const calAverage = (data) => {
    const tab = [];
    data.map((ele) => {
      tab.push(ele.Age);
      return "";
    });
    const average = tab.reduce((a, b) => a + b, 0) / tab.length;
    return ` age average :${average.toFixed(2)}`;
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

  ////////////
  const labelsSex = ["Male", "female"];
  const datasetSex = [
    {
      label: "Sex",
      data: [filterSex(data, "male").length, filterSex(data, "female").length],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)"],
    },
  ];
  //////////////
  const labelsPclass = ["Pclass 1", "Pclass 2", "Pclass 3"];
  const datasetPclass = [
    {
      label: "Pclass",
      data: [filterPclass(data, 1).length, filterPclass(data, 2).length, filterPclass(data, 3).length],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(153, 102, 255, 0.2)"],
    },
  ];

  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeSex = (e) => setSex(e.target.value);

  const handleChangePclass = (e) => setPclass(e.target.value);

  return (
    <div>
      {isLoading ? (
        "chargement"
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <label htmlFor="">
              {survived ? "only survived" : "all"}
              <input onClick={() => setSurvived((x) => !x)} type="checkbox" value={survived} />
            </label>
            <label>
              Age
              <input type="number" value={age} onChange={handleChangeAge} />
            </label>
            <label>
              Sex
              <select type="number" value={sex} onChange={handleChangeSex}>
                <option value="">All</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </label>
            <label>
              Pclass
              <input type="number" min="0" max="3" value={pclass} onChange={handleChangePclass} />
            </label>
          </div>
          <div style={{ display: "flex" }}>
            <PieChart dataset={datasetSex} labels={labelsSex} />
            <PieChart dataset={datasetPclass} labels={labelsPclass} />
          </div>
          <p>{calAverage(data)}</p>
        </div>
      )}
    </div>
  );
};
export default Stat;

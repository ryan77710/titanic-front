import { useEffect, useState } from "react";

import PieChart from "./PieChart";

import axios from "axios";

import { filterEmbarked, filterPclass, filterSex, calAverage, calcEcartType } from "../utils/utils";

const Stat = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [age, setAge] = useState("");
  const [pclass, setPclass] = useState(0);
  const [sex, setSex] = useState("");
  const [data, setData] = useState([]);
  const [survived, setSurvived] = useState("");
  const [embarked, setEmbarked] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}search?Pclass=${Number(pclass) === 0 ? "" : pclass}&Embarked=${embarked}&Sex=${sex}&Age=${age}&Survived=${survived ? true : ""}`
        );
        setData(response.data.customers);

        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [age, pclass, sex, survived, embarked]);

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
  //////////////
  const labelsEmbarked = ["Embarked S", "Embarked C", "Embarked Q"];
  const datasetEmbarked = [
    {
      label: "Pclass",
      data: [filterEmbarked(data, "S").length, filterEmbarked(data, "C").length, filterEmbarked(data, "Q").length],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 99, 132, 0.2)", "rgba(153, 102, 255, 0.2)"],
    },
  ];

  const handleChangeAge = (e) => setAge(e.target.value);
  const handleChangeSex = (e) => setSex(e.target.value);

  const handleChangePclass = (e) => setPclass(e.target.value);
  const handleChangeEmbarked = (e) => setEmbarked(e.target.value);

  return (
    <div>
      {isLoading ? (
        "chargement"
      ) : (
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <label htmlFor="">
              {survived ? "only survived" : "All "}
              <input onClick={() => setSurvived((x) => !x)} type="checkbox" value={survived} />
            </label>
            <label>
              Age
              <input min="1" type="number" value={age} onChange={handleChangeAge} />
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
            <label>
              Embarked
              <select type="text" value={embarked} onChange={handleChangeEmbarked}>
                <option value="">All</option>
                <option value="S">S</option>
                <option value="Q">Q</option>
                <option value="C">C</option>
              </select>
            </label>
          </div>
          <div className="chart-container" style={{ display: "flex" }}>
            <PieChart dataset={datasetSex} labels={labelsSex} />
            <PieChart dataset={datasetPclass} labels={labelsPclass} />
            <PieChart dataset={datasetEmbarked} labels={labelsEmbarked} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p>{calAverage(data)}</p>
            <p>Ecart Type : {calcEcartType(data)}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Stat;

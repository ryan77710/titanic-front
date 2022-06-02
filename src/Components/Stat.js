import { useEffect, useState } from "react";
import PieChart from "./PieChart";
import axios from "axios";

const Stat = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const [age, setAge] = useState("");
  const [pclass, setPclass] = useState("");
  const [sex, setSex] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/search?Pclass=${pclass}&Sex=${sex}&Age=${age}&Survived=${true}`);
        setData(response.data.customers);
        setIsLoading(false);
        sortAge(response.data.customers, age);
      } catch (error) {}
    };

    fetchData();
  }, [age, pclass, sex]);

  const sortAge = (data, age) => {
    const newTab = [...data];
    const result = newTab.filter((ele) => ele.Age === age);
    return result;
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

  const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  const dataset = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
    },
  ];
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

  return (
    <div>
      {isLoading ? (
        "chargement"
      ) : (
        <div>
          <div style={{ display: "flex" }}>
            <PieChart dataset={datasetSex} labels={labelsSex} />
            <PieChart dataset={datasetPclass} labels={labelsPclass} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Stat;

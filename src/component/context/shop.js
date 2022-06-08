import { useState } from "react";
import Context from "./Context";

const Shop = (props) => {
  
  const AllDataList = [];
  const [data, setdata] = useState({
    Tournament_type: "Friendly",
    Team1name: "",
    Team1result: "Home",
    Team2name: "",
    Tournament_Name: "",
    comment: "",
    endDate: "",
    location: "",
    startDate: "",
    team2result: "Home",
  });

  function addDataTOlist() {
    AllDataList.push(data);
    console.log("data",data);
    console.log("alldata",AllDataList)
  }
  
  return (
    <Context.Provider
      value={{
        data,
        setdata,
        addDataTOlist,
        AllDataList,
      
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Shop;

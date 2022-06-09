import { useState } from "react";
import Context from "./Context";

const Shop = (props) => {
  
  const [AllDataList,setAllDataList] = useState([]);
  const defData = {
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
  }
  const [data, setdata] = useState(defData);

  function addDataTOlist() {
    console.log("hello")
   setAllDataList([
     ...AllDataList,data
   ])
   console.log("callled")
   setdata(defData);
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

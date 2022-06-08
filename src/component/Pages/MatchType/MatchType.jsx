import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import "./MatchType.css";

const MatchType = () => {
  const {data,setdata} = useContext(Context);
 

  const handleChange = (e)=>{
    const Name = e.target.name;
    const Value = e.target.value;
    setdata({
      ...data,
      [Name]:Value
    })
  }
  
  return (
    <div className="matchtype">
      <div className="Heading">
        <span>Type 1/3</span>
      </div>
      <div className="body">
        <label htmlFor="Match"> matchtype</label>
        <select name="Tournament_type"  onChange={handleChange} >
          <option value="Friendly">Friendly</option>
          <option value="Tournament">Tournament</option>
        </select>
      </div>
      <div className="next">
       <Link to="/general"><button >Next</button></Link> 
      </div>
    </div>
  );
};
export default MatchType;

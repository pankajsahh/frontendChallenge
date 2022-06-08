import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import "./General.css";

const General = () => {

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
    <div className="General">
      <div className="generalHeading">
        <span>General 2/3</span>
      </div>
      <div className="Generalbody">
        <div className="dateLocationName">
          <input name="startDate" value={data.startDate} onChange={handleChange} type="date" placeholder="start date & time" />
          <input name="location" value={data.location} onChange={handleChange} type="text" placeholder="match location " />
         {data.Tournament_type==="Friendly"?
        <div></div>
      : 
      <input
      name="Tournament_Name"

      type="text"
      value={data.Tournament_Name} onChange={handleChange}
      placeholder="Tournament name"
    />
        } 
        </div>
        <div className="endComment">
          <input name="endDate" type="date"  value={data.endDate} onChange={handleChange} placeholder="end date & time" />
          <textarea
            name="comment"
            rows="10"
            cols="50"
            value={data.comment} onChange={handleChange}
            placeholder="comments"
          ></textarea>
        </div>
      </div>
      <div className="next">
       <Link to="/team"><button>Next</button></Link> 
       <Link to="/"><button>Back</button></Link> 
      </div>
    </div>
  );
};
export default General;

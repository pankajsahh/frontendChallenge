import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import "./Team.css";

const Team = () => {


  const {data,setdata,addDataTOlist} = useContext(Context);
 


  const handleChange = (e)=>{
    const Name = e.target.name;
    const Value = e.target.value;
    setdata({
      ...data,
      [Name]:Value
    })
  }


  return (
    <div className="Team">
      <div className="TeamHeading">
        <span>Team 3/3</span>
      </div>
      <div className="TeamMach">

        <div className="Teams">
          <input name="Team1name"  value={data.Team1name} onChange={handleChange}  type="text" placeholder="Team 1 name" />
          <div className="separator">Vs</div>
          <input name="Team2name"  value={data.Team2name} onChange={handleChange}  type="text" placeholder="Team 2 name " />
        </div>


        <div className="decision">
          <div className="teamresult">

            <label htmlFor="Team1result">Home or Away</label>
            <select name="Team1result"  value={data.Team1result} onChange={handleChange}  id="Match">
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>

          </div>

          <div className="separator">Vs</div>

          <div className="teamresult">

            <label htmlFor="Team2"> Home or Away</label>

            <select name="team2result"  value={data.team2result} onChange={handleChange}  id="Match">
              <option value="Home">Home</option>
              <option value="Away">Away</option>
            </select>
          </div>
        </div>
      </div>
      <div className="next">
      <Link to="/result"> <button onClick={addDataTOlist}>Submit</button></Link>
        <Link to="/general"> <button>Back</button></Link>
       
      </div>
    </div>
  );
};
export default Team;

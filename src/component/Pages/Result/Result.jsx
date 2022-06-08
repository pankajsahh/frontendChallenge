import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";
import "./Result.css";

const Result = () => {
  const { AllDataList } = useContext(Context);
  
  return (
    <div className="Result">
      <table>
      <thead>
        <tr>
          <th>Team 1</th>
          <th>team 2</th>
          <th>Match type</th>
          <th>Tournament Name</th>
          <th>start date</th>
          <th>end date</th>
          <th>location </th>
          <th>comment</th>
        </tr>
        </thead>
        <tbody>
        {AllDataList.map(
          ({
            Tournament_type,
            Team1name,
            Team1result,
            Team2name,
            Tournament_Name,
            comment,
            endDate,
            location,
            startDate,
            team2result,
          },index) => {
            return (
              <tr key={index}>
                <td>{`${Team1name} (${Team1result})`}</td>
                <td>{`${Team2name}(${team2result})`}</td>
                <td>{Tournament_type}</td>
                <td>{Tournament_Name}</td>
                <td>{startDate}</td>
                <td>{endDate}</td>
                <td>{location}</td>
                <td>{comment}</td>
              </tr>
            );
          }
        )}
        </tbody>
      </table>
      <div className="next">
      <Link to="/"> <button>Add new match</button></Link>
      </div>
    </div>
  );
};
export default Result;

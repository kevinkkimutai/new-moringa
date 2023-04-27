import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Pairlist.css";

const PairList = () => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/pairs")
      .then((response) => {
        setPairs(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="pt-5">
     <div className="pair">
      <h2>Pair List</h2>
      </div>
      <div className="grid-container contain">
  {pairs.map((pair, index) => (
    
      <div className="card">
        <h2 className="h5 mt-0 mb-1">{`Pair ${index + 1}`}</h2> 
        <ol>
          <li style={{color: "black"}}>{pair.student1_name}</li>
          <li style={{color: "black"}}>{pair.student2_name}</li>
        </ol>
        <p className="mb-0 " style={{color: "black"}}>{`Week ${pair.week_no}`}</p>
      </div>
   
  ))}
</div>
<div className="pt-5"></div>
    </div>
  );
};

export default PairList;

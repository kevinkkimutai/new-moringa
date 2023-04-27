import React from "react";

function Studentdashboard() {
  return (
 
   
      <div className="container  pt-5 me-5 admindashboard">
  <div className="row align-items-center ms-5 pt-5">
    <div className="col">
     <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Group</span></h4>
   <h6 className="total">No: no  <a className="ms-4" href="/"> view</a> </h6>
  
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Grade</span></h4>
    <h6 className="total">grade: 10  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Assigned TM</span></h4>
    <h6 className="total">Name: Name of TM</h6>
  </div>
</div>
    </div>
  </div>

  <div class="row justify-content-center pt-5 ms-5">
    <div class="col-5 text-start">
    <h3><u>Strenghts</u></h3>
    <ol>
    <li>W.description</li>
    <li>W.description</li>
    <li>W.description</li>
    <li>W.description</li>
    <li>W.description</li>  
    </ol>
    </div>
    <div class="col-5 text-start">
    <h3><u>Weaknesses</u></h3>
    <ol >
    <li>S.description</li>
        <li>S.description</li>
        <li>S.description</li>
        <li>S.description</li>
        <li>S.description</li>
    </ol>
    </div>
  </div>


</div>
  
   
  );
}

export default Studentdashboard;

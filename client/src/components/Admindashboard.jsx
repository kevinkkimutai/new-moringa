import React from "react";
import './profile/studentprofile.css'

function Admindashboard() {
  return (
 
   
      <div className="container text-center pt-5 me-5 admindashboard">
  <div className="row align-items-center ms-5 pt-5">
    <div className="col">
     <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Students</span></h4>
   <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Feedbacks</span></h4>
    <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Pairs</span></h4>
    <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
  </div>

  <div className="row align-items-center ms-5 pt-3">
    <div className="col">
     <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>T.Mentors</span></h4>
   <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Announcements</span></h4>
    <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
    <div className="col">
    <div className="card bg-dark" style={{width: "18rem"}}>
  <div className="card-body">
    <h4 className="card-title ms-0"><i className="fas fa-users fa-fw me-3"></i><span>Pairs</span></h4>
    <h6 className="total">Total: 100  <a className="ms-4" href="/"> view</a> </h6>
  </div>
</div>
    </div>
  </div>
</div>
  
   
  );
}

export default Admindashboard;

import React, { useState } from "react";
import './feedback.css';
import '../../index.css'
import axios from "axios";

function Studentfeedback({user}) {
  const [user_id, setUser_id] = useState('');
  const [comment, setComment] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/feedback`, {
        user_id: user.id,
       comment,
      });
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="containr d-flex justify-content-center pt-3">
      <div className="pt-0">
        <h3 className="lab">
          <u>FEEDBACK</u>
        </h3>

        <div className="card cardp" >
    
          <label htmlFor="formFile" className="form-label">
            Comment:
          </label>
          <div className="form-group col-6">
          {user && (  
            <input type="comment" className="form-control" placeholder="Comment" value={user.id} disabled />
            )}
        
           
          </div>
    
          <div className="mb-3 ">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label pt-4"
            >
              Feedback:
            </label>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                value={comment} onChange={(e) => setComment(e.target.value)} 
                style={{ height: "150px" }}
              ></textarea>
              <label htmlFor="floatingTextarea2">✉️ Leave a feedback </label>
            </div>
            <div className="d-flex pbtn ">
              <button type="submit" onClick={handleSubmit} className="mt-3 ms-5 btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentfeedback;

import React, { useEffect, useState } from 'react'
 import './feedback.css';
import axios from 'axios';

function Adminfeedback({token}) {
    const [feedback, setFeedback] = useState([]);

    const fetchfeedback = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/feedbacklist`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setFeedback(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchfeedback();
      }, []);
  return (
    <div className="container d-flex pt-3 me-5 fcont">
      
                <div className="card cardf bg-white ms-5 mb-5 pt-5 ">
                    <h5 className="mb-1 h5"><u>All FeedBacks</u></h5>
                    {feedback.map((feedback) => ( 
                        
                    <div className="reviews-members pt-5 ms-5 mb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-header ms-3">
                                    <h6 className="mb-1 text-black">{feedback.id}. <a className="text-black ms-1" href="/">  {feedback.fullname}</a></h6>
                                    <p className="text-black">{new Date(feedback.created_at).toLocaleString()}</p>
                                </div>
                                <div className="reviews-members-body text-black ms-4">
                                    <p>{feedback.comment}</p>
                                </div>    
                            </div>
                        </div>
                    </div>
                       ))}

                </div>

            </div>
  )
}

export default Adminfeedback

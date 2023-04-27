import React, { useEffect, useState } from 'react';
import './studentprofile.css';
import img from '../../assets/logo.png';

const Studentprofile = ({ token }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/user/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [token]);

  return (
    <div className="container d-flex justify-content-center align-items-center pt-5">
 <div className='pt-5'>
 {user &&
      <div className="card cardp">
        <div className="upper">
          {/* <img src={img} className="img-fluid" height="5" alt='img' />*/}
        </div>
        <div className="user text-center">
          <div className="profile">
            <img src={img} className="rounded-circle" width="60" alt="img" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <h4 className="mb-0">{user.fullname}</h4>
          <div className="d-flex justify-content-between align-items-center mt-4 ms-5 px-4">
            <div className="stats">
              <h6 className="mb-0">Role</h6>
              <span>{user.role}</span>
            </div>
            <div className="stats">
              <h6 className="mb-0">Email</h6>
             <span>{user.email}</span>
            </div>
          </div>
          <div className="d-flex pbtn ">
            <button type="submit" className="mt-5 ms-5 btn btn-primary">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    }
 </div>
    </div>
  );
};

export default Studentprofile;

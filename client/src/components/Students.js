import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Students({token}) {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/students`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setStudents(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        fetchStudents();
      }, []);
  return (
    <div className='container text-center pt-5 me-5 admindashboard'>
        <h4><u>STUDENTS LIST</u></h4>
        <div className="row align-items-center pt-3 ms-4 mb-5">

        {students.map((student) => ( 
    <div className="col-3 pt-1" key={student.id}>
     <div className="card slist text-black" style={{width: "15.4rem"}}>
     <p className="total mb-1">{student.id}. <b><u>{student.fullname}</u></b></p>
  <div className="card-body pt-0 text-start ms-2">
   <p className="total mb-0"><b>Grade:</b> {student.grade}  </p>
   <p className="total mb-0"><b>Group:</b> {student.id}  </p>
   <p className="total mb-0"><b>Adm.Date:</b> {new Date(student.created_at).toLocaleString()} </p>
  </div>
</div>
    </div>
        ))}

  </div>
  <div className="pt-5" ></div>
      
    </div>
  )
}

export default Students

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Col, Container, Form, Row, Nav } from 'react-bootstrap';
function Pairing({token}) {
  const [pairs, setPairs] = useState([]);
  const [student1Id, setStudent1Id] = useState('');
  const [student2Id, setStudent2Id] = useState('');
  const [message, setMessage] = useState('');
  const handleGeneratePairs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pair_students');
      setPairs(response.data);
      setMessage('Pairs generated successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to generate pairs');
    }
  };
  const handleCreatePair = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/pairs', { student1_id: student1Id, student2_id: student2Id });
      setPairs([...pairs, response.data]);
      setMessage('Pair created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to create pair');
    }
  };
  const handleDeletePair = async (pairId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/pairs/${pairId}`);
      setPairs(pairs.filter((pair) => pair.id !== pairId));
      setMessage('Pair deleted successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete pair');
    }
  };
  const handleDeleteAllPairs = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/pairs`);
      setPairs([]);
      setMessage('All pairs deleted successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete all pairs');
    }
  };
  useEffect(() => {
    const fetchPairs = async () => {
      try {
        const response = await axios.get('http://localhost:3000/pairs');
        setPairs(response.data);
      } catch (error) {
        console.error(error);
        setMessage('Failed to fetch pairs');
      }
    };
    fetchPairs();
  }, []);
  return (

        <div className='container text-center pt-5 me-5 admindashboard'>
        <h4><u>PAIRS LIST</u></h4>
        <Col md={10} className="mt-2 ms-5">
          <div className="flex-column ms-5">
            <a className='ms-3' href="#" onClick={handleGeneratePairs}>Generate Pairs</a>
            <a className='ms-3' href="#" onClick={handleDeleteAllPairs}>Delete.all</a>
            </div>
     </Col>
        <div className="row align-items-center pt-0 ms-5 mb-5">

        {pairs.map((pair) => (
    <div className="col-3 pt-1" key={pair.id}>
     <div className="card slist bg-dar pt-2" style={{width: "15.4rem"}}>
     <p className="total mb-1 text-black"><b>Group: {pair.id}</b>  <c className="total mb-0 ms-3 text-black"><b>Week: {pair.week_no} </b></c></p>
    
  <div className="card-body text-start ms-3 pt-1">
    <p className='total mb-0 text-black ms-1'>
      <ol>
      <li>{pair.student1_name}</li> 
      <li>{pair.student2_name}</li>
      </ol>
    </p>
  
  
  </div>
  <div class="d-grid gap-2 d-md-block">
  <button type="button" className="btn btn-outline-danger btn-sm mb-1 " onClick={() => handleDeletePair(pair.id)}> Delete </button>
  </div>
</div>
    </div>
        ))}

  </div>
  <div className='pt-5'>

  </div>
    </div>
    // <div className='container pt-5 me-5'>
    //   <div className='row ms-5'>
      
          
         
    //     <Col md={10} className="mt-3">
    //       <h1>Pair List</h1>
    //       <div className="flex-column">
    //         <a className='ms-3' href="#">Dashboard</a>
    //         <a className='ms-3' href="#" onClick={handleGeneratePairs}>Generate Pairs</a>
    //         <a className='ms-3' href="#" onClick={handleDeleteAllPairs}>Delete.all</a>
    //         </div>
     
          /* <Form onSubmit={handleCreatePair}>
            <Form.Group>
              <Form.Label>Student 1 ID:</Form.Label>
              <Form.Control type="text" value={student1Id} onChange={(event) => setStudent1Id(event.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Student 2 ID:</Form.Label>
              <Form.Control type="text" value={student2Id} onChange={(event) => setStudent2Id(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Create Pair</Button>
          </Form> */
          /* <p>{message}</p>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {pairs.map((pair) => (
              <Col key={pair.id}>
                <Card>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "24px", padding: "10px 0" }}>
                      {pair.student1_name} and {pair.student2_name}
                    </Card.Title>
                    <Card.Text style={{color: "black", fontSize: "16px"}}>
                      Pair ID: {pair.id} <br />
                      Week: {pair.week_no} <br />
                      Created at: {new Date(pair.created_at).toLocaleString()}
                    </Card.Text>
                    <Button variant="danger" onClick={() => handleDeletePair(pair.id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </div>
    </div> */
  );
}
export default Pairing;
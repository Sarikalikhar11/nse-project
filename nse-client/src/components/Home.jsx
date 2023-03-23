import React, { useEffect, useState } from 'react';
// import '../styles/Header.css';
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AiOutlineLineChart } from 'react-icons/ai';
import { MdBookmark, MdDiamond } from 'react-icons/md';

const Home = () => {
  return (
    <>
      <Navbar
        // bg="light"
        expand="lg"
        className="d-flex justify-content-center"
      >
        <Container fluid className="nav_down">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/bmcrequest">BMC_Request</Nav.Link>
            <Nav.Link href="/insurancesubmission">InsuranceSubmission</Nav.Link>
            <Nav.Link href="/penaltydashboard">PenaltyDashboard</Nav.Link>
            <Nav.Link href="/noobjection">NoObjection</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section className="section container m-5 ps-5">
        <div className="row">
          <div className="col-md-3 box1 p-5 me-5">
            <div className="d-flex justify-content-between">
              <h6>Weekly Sales</h6>
              <AiOutlineLineChart
                style={{
                  color: 'chocolate',
                  fontSize: '25px',
                  fontWeight: '600',
                }}
              />
            </div>
            <div>
              <p>$ &nbsp; 15,0000</p>
              <p>Increased by 60%</p>
            </div>
          </div>
          <div className="col-md-3 box2 p-5 me-5">
            <div className="d-flex justify-content-between ">
              <h6>Weekly Orders</h6>
              <MdBookmark
                style={{
                  color: 'chocolate',
                  fontSize: '25px',
                  fontWeight: '600',
                }}
              />
            </div>
            <div>
              <p>$ &nbsp; 45,6334</p>
              <p>Decreased by 10%</p>
            </div>
          </div>
          <div className="col-md-3 box3 p-5">
            <div className="d-flex justify-content-between">
              <h6>Visitors Online</h6>
              <MdDiamond
                style={{
                  color: 'chocolate',
                  fontSize: '25px',
                  fontWeight: '600',
                }}
              />
            </div>
            <div>
              <p>$ &nbsp; 95,5741</p>
              <p>Increased by 5%</p>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </section>
    </>
  );
};

export default Home;

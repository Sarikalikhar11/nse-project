import React from 'react';
import '../styles/Nobjection.css';
import Card from 'react-bootstrap/Card';
import {
  MdList,
  MdInsertDriveFile,
  MdDriveFileRenameOutline,
  MdTaskAlt,
} from 'react-icons/md';
import { FaPlusCircle } from 'react-icons/fa';
import { HiDocumentDuplicate, HiOutlinePlusCircle } from 'react-icons/hi';

const Noobjection = () => {
  return (
    <>
      <form className="container-fluid ins-sub">
        <div className="row">
          <div className="col-md-1 col-sm-4">
            <div className="side-nav-container">
              <div className="side-nav">
                <div className="side-nav-box box text-center p-2">
                  <MdInsertDriveFile
                    style={{
                      width: '20px',
                      height: '20px',
                      margin: '10px',
                      color: 'rgb(53, 11, 144)',
                    }}
                  />
                  <h6>Insurance Details</h6>
                </div>
                <div className="side-nav-box text-center p-2">
                  <HiDocumentDuplicate
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Documents</h6>
                </div>
                <div className="side-nav-box text-center p-2">
                  <MdList
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Review Queue</h6>
                </div>
                <div className="side-nav-box text-center p-2">
                  <MdDriveFileRenameOutline
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Approval</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-11">
            <div className="back-dash">
              <h6 className="title">
                <i class="fa-sharp fa-solid fa-arrow-left"></i>
                &nbsp;&nbsp;Back to My Task
              </h6>
            </div>
            <div className="container p-2 mt-4 me-5">
              <div className="form-container">
                <section>
                  <div className="row">
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Application ID
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="525725"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Member Code
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="19034"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Member Name
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="Motilaloswal"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Application Date
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="12/06/2020"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-3">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Compliance Officer
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="Rajesh Kumar"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                  </div>
                </section>
                <section className="mt-4">
                  <div className="row">
                    <div className="col-md-2">
                      <Card
                        className=""
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Compliance officer Mobile no
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="9910277722"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Compliance officer Email Id
                        </p>
                        <input
                          type="email"
                          name=""
                          value=""
                          placeholder="abc@domain.com"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Contact Person Name
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="Rahul Jain"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Contact Person no.
                        </p>
                        <input
                          type="text"
                          name=""
                          value=""
                          placeholder="9281700833"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                    <div className="col-md-2">
                      <Card
                        className="card"
                        style={{
                          border: 'none',
                          paddingLeft: '80px',
                          width: '250px',
                        }}
                      >
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Contact Person Email Id
                        </p>
                        <input
                          type="email"
                          name=""
                          value=""
                          placeholder="abc@domain.com"
                          style={{ border: 'none', marginTop: '-15px' }}
                        />
                      </Card>
                    </div>
                  </div>
                </section>
              </div>
              <div className="form-container">
                <section>
                  <div className="row">
                    <div className="col-md-6">
                      <h4 style={{ fontWeight: '600' }}>
                        Insurance Policy details
                      </h4>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end pe-5">
                      <div className="d-flex pe-5">
                        <MdTaskAlt
                          style={{
                            color: 'rgb(223, 120, 30)',
                            marginRight: '10px',
                          }}
                        />
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Review Checklist
                        </p>
                      </div>
                      <div className="d-flex">
                        <HiOutlinePlusCircle
                          style={{
                            color: 'rgb(223, 120, 30)',
                            marginRight: '10px',
                          }}
                        />
                        <p style={{ fontSize: '13px', color: 'gray' }}>
                          Add to Review
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h6
                    style={{
                      fontSize: '12px',
                      color: 'rgb(11, 11, 121)',
                      fontWeight: '600',
                    }}
                  >
                    Name of Insurance Company
                  </h6>
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'rgb(73, 73, 73)',
                      marginTop: '20px',
                    }}
                  >
                    ABC Insurance Co
                  </p>
                  <div className="upper_section mt-5">
                    <div className="row">
                      <div className="col-md-3">
                        <Card
                          className="card"
                          style={{
                            border: 'none',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgb(11, 11, 121)',
                              fontWeight: '600',
                            }}
                          >
                            Policy number
                          </p>
                          <input
                            type="email"
                            name=""
                            value=""
                            placeholder="POL/123456/ABCD/123"
                            style={{
                              border: 'none',
                              marginTop: '-15px',
                              outline: 'none',
                            }}
                          />
                        </Card>
                      </div>
                      <div className="col-md-3">
                        <Card
                          className="card"
                          style={{
                            border: 'none',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgb(11, 11, 121)',
                              fontWeight: '600',
                            }}
                          >
                            Policy Valid From
                          </p>
                          <input
                            type="email"
                            name=""
                            value=""
                            placeholder="01/06/2020"
                            style={{
                              border: 'none',
                              marginTop: '-15px',
                              outline: 'none',
                            }}
                          />
                        </Card>
                      </div>
                      <div className="col-md-3">
                        <Card
                          className="card"
                          style={{
                            border: 'none',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgb(11, 11, 121)',
                              fontWeight: '600',
                            }}
                          >
                            Policy Valid to
                          </p>
                          <input
                            type="email"
                            name=""
                            value=""
                            placeholder="01/06/2020"
                            style={{
                              border: 'none',
                              marginTop: '-15px',
                              outline: 'none',
                            }}
                          />
                        </Card>
                      </div>
                      <div className="col-md-3"></div>
                    </div>
                  </div>
                  <div className="lower_section mt-4">
                    <div className="row">
                      <div className="col-md-3">
                        <Card
                          className="card"
                          style={{
                            border: 'none',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgb(11, 11, 121)',
                              fontWeight: '600',
                            }}
                          >
                            Policy Renewal Receipt Number
                          </p>
                          <input
                            type="email"
                            name=""
                            value=""
                            placeholder=""
                            style={{
                              border: 'none',
                              marginTop: '-15px',
                              outline: 'none',
                            }}
                          />
                        </Card>
                      </div>
                      <div className="col-md-3">
                        <Card
                          className="card"
                          style={{
                            border: 'none',
                          }}
                        >
                          <p
                            style={{
                              fontSize: '12px',
                              color: 'rgb(11, 11, 121)',
                              fontWeight: '600',
                            }}
                          >
                            Policy Renewal Receipt Date
                          </p>
                          <input
                            type="email"
                            name=""
                            value=""
                            placeholder=""
                            style={{
                              border: 'none',
                              marginTop: '-15px',
                              outline: 'none',
                            }}
                          />
                        </Card>
                      </div>
                      <div className="col-md-3"></div>
                      <div className="col-md-3"></div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Noobjection;

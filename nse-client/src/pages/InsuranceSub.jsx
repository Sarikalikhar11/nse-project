import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/InsuranceSub.css';
import { MdTextFormat } from 'react-icons/md';
import { FcDocument } from 'react-icons/fc';
import { BsFillEyeFill } from 'react-icons/bs';
import { MdUpload } from 'react-icons/md';
import { DatePicker, Space } from 'antd';

const InsuranceSub = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <form className="container-fluid ins-sub">
        <div className="row">
          <div className="col-md-12">
            <div className="back-dash">
              <h6 className="title">
                <i class="fa-sharp fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
                to Dashboard
              </h6>
            </div>
          </div>
        </div>
        <div className="container form">
          <form className="m-4">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group ins-sub-title d-flex justify-content-between pt-4 mb-4">
                  <h3>Insurance Submission</h3>
                  <p>
                    Please contact the <span>Helpdesk</span> for further
                    assistance
                  </p>
                </div>
              </div>
            </div>
            <div className="pol_details mb-4">
              <div className="col-md-6">
                <h5>Insurance Policy Details</h5>
              </div>
            </div>
            <div className="company_select">
              <label for="">Name of Insurance Company</label>
            </div>
            <div className="row">
              <div className="col-md-5 company_sel">
                <select className="form-select border-0 mt-3">
                  <option selected className="text_grey text-bold">
                    Select Company
                  </option>
                  <option className="text-bold" value="1">
                    1. Oriental Insurance
                  </option>
                  <option value="2">
                    2. Oriental Insurance (through ANMI/BBF)
                  </option>
                  <option value="3">3. New India Assurance Co.</option>
                  <option value="3">4. Lorem Ipsum</option>
                  <option value="3">5. Others</option>
                </select>
              </div>
            </div>
            <div className="upload mt-5">
              <h4>Upload Insurance Policy</h4>
              <div className="row">
                <div className="col-md-4">
                  <Card className="card_policy border-0">
                    <Card.Body>
                      <Card.Title className="card_tit mt-4 mb-3">
                        Upload Guidelines
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted card_subtit">
                        Before uploading the files, please ensure the following
                      </Card.Subtitle>
                      <Card.Text className="d-flex card_text">
                        <div>
                          <MdTextFormat
                            style={{
                              height: '20px',
                              width: '20px',
                              marginRight: '10px',
                            }}
                          />
                        </div>
                        <div>
                          Naming convention - (member code)_Insurance Policy_
                          (valid to date DDMMYY)
                        </div>
                      </Card.Text>
                      <Card.Text className="d-flex card_text">
                        <div>
                          <FcDocument
                            style={{
                              height: '17px',
                              width: '17px',
                              marginRight: '10px',
                            }}
                          />
                        </div>
                        <div>
                          Document <br /> 1. Acceptable format : PDF <br />
                          2. Max file size limit : 2 MB
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className="card_policy border-0">
                    <Card.Body>
                      <Card.Title className="card_tit1 d-flex justify-content-between mt-4 mb-3">
                        Insurance Policy
                        <BsFillEyeFill
                          className="bsicon"
                          style={{
                            fontSize: '20px',
                          }}
                        />
                        <MdUpload
                          className="fcicon"
                          style={{ fontSize: '20px' }}
                        />
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card className="card_policy border-0">
                    <Card.Body>
                      <Card.Title className="card_tit2 d-flex flex-column justify-content-end">
                        <input type="button" name="" value="Validate" />
                        <p>Validate Insurance Policy</p>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="policy_details justify-content-between">
              <div className="row">
                <div className="col-md-3">
                  <Card className="pol_details me-3 border-0">
                    <p>Policy number</p>
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="Eg: 123456"
                    />
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Policy Valid From</p>
                    <DatePicker
                      onChange={onChange}
                      style={{
                        border: 'none',
                        borderBottom: '1px solid rgb(158, 156, 156)',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    />
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Policy Valid to</p>
                    <DatePicker
                      onChange={onChange}
                      style={{
                        border: 'none',
                        borderBottom: '1px solid rgb(158, 156, 156)',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    />
                  </Card>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Policy Renewal Receipt Number</p>
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="Enter Receipt Number"
                    />
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Policy Renewal Receipt Date</p>
                    <DatePicker
                      onChange={onChange}
                      style={{
                        border: 'none',
                        borderBottom: '1px solid rgb(158, 156, 156)',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    />
                  </Card>
                </div>
              </div>
            </div>
            <div className="contact_details justify-content-between">
              <h4>Contact Person Details</h4>
              <p>
                Provide Details of the person who is responsible for this
                Application
              </p>
              <div className="row">
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Name</p>
                    <input
                      type="text"
                      name=""
                      value=""
                      placeholder="Enter Name"
                    />
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Mobile no. </p>
                    <input
                      type="number"
                      name=""
                      value=""
                      placeholder="Enter Mobile Number"
                    />
                  </Card>
                </div>
                <div className="col-md-3">
                  <Card className="pol_details border-0">
                    <p>Email ID</p>
                    <input
                      type="email"
                      name=""
                      value=""
                      placeholder="Enter Email Id"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </form>
          <div className="proc_btn d-flex justify-content-end me-lg-5">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <button type="submit" value="Save">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default InsuranceSub;

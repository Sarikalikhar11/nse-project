import React from 'react';
import '../styles/PenaltyDashboard.css';
import { HiCurrencyRupee } from 'react-icons/hi';
import { RxCountdownTimer, RxCaretSort } from 'react-icons/rx';
import { TbFileDownload, TbMessagePlus } from 'react-icons/tb';
import { FaFileSignature } from 'react-icons/fa';
import { BsClipboardData } from 'react-icons/bs';
import { ImDownload3 } from 'react-icons/im';
import { CgPlayListSearch } from 'react-icons/cg';
import { MdOutlineToggleOff, MdFileUpload } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import Form from 'react-bootstrap/Form';

const PenaltyDashboard = () => {
  const customStyles = {
    // DataTable: {
    //   style: {
    //     width: '900px',
    //   },
    // },
    headCells: {
      style: {
        color: 'rgb(11, 11, 121)',
        fontSize: '14px',
        fontWeight: '600',
      },
    },
  };
  const fields = [
    {
      value: 'Lorem',
      label: 'Lorem',
    },
  ];
  const columns = [
    {
      name: 'memberName',
      selector: (row) => row.memberName,
      style: { color: 'cadetblue', fontWeight: '600' },
    },
    {
      name: 'memberCode',
      selector: (row) => row.memberCode,
      style: { color: 'gray' },
    },
    {
      name: 'originalPenalty_Amt_Inr',
      selector: (row) => row.originalPenalty_Amt_Inr,
      style: { color: 'gray' },
    },
    {
      name: 'newPenalty_Amt',
      selector: (row) => row.newPenalty_Amt,
      style: { color: 'black', fontWeight: 'bold' },
    },
    {
      name: 'In_Review',
      selector: (row) => row.In_Review,
    },
    {
      name: 'Review',
      selector: (row) => row.Review,
    },
    {
      name: 'Revised_amount',
      selector: (row) => row.Revised_amount,
    },
    {
      name: 'Remarks',
      selector: (row) => row.Remarks,
    },
    {
      name: 'Agenda_Minutes ',
      selector: (row) => row.Agenda_Minutes,
    },
  ];
  const data = [
    {
      id: 1,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 2,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 3,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 4,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 5,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 6,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 7,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
    {
      id: 8,
      memberName: 'Motilal Oswal',
      memberCode: 112233,
      originalPenalty_Amt_Inr: 1000,
      newPenalty_Amt: 1000,
      In_Review: (
        <>
          <MdOutlineToggleOff style={{ fontSize: '30px', color: 'gray' }} />
        </>
      ),
      Review: (
        <>
          <Form.Select
            options={fields}
            value="Lorem"
            style={{ border: 'none' }}
          />
        </>
      ),
      Revised_amount: '',
      Remarks: (
        <>
          <TbMessagePlus style={{ color: 'chocolate', fontSize: '20px' }} />
        </>
      ),
      Agenda_Minutes: (
        <>
          <MdFileUpload
            style={{ fontSize: '20px', color: 'rgb(197, 160, 91)' }}
          />
        </>
      ),
      sortable: true,
    },
  ];

  return (
    <>
      <form className="container-fluid ins-sub">
        <div className="row">
          <div className="col-md-1">
            <div className="side-nav-container">
              <div className="side-nav">
                <div className="side-nav-box text-center p-2">
                  <HiCurrencyRupee
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Insurance MIS</h6>
                </div>
                <div className="side-nav-box text-center p-2">
                  <RxCountdownTimer
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Previous Submissions</h6>
                </div>
                <div className="side-nav-box text-center p-2">
                  <TbFileDownload
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Download Files</h6>
                </div>
                <div className="side-nav-box text-center p-2">
                  <FaFileSignature
                    style={{ width: '20px', height: '20px', margin: '10px' }}
                  />
                  <h6>Generate Letters</h6>
                </div>
                <div className="side-nav-box box5 text-center p-2">
                  <BsClipboardData
                    style={{
                      width: '20px',
                      height: '20px',
                      margin: '10px',
                      color: 'rgb(53, 11, 144)',
                    }}
                  />
                  <h6>Insurance MIS</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-11">
            <div className="row">
              <div className="back-dash">
                <h6 className="title">
                  <i class="fa-sharp fa-solid fa-arrow-left"></i>
                  &nbsp;&nbsp;Back to Main Dashboard
                </h6>
              </div>
              <div className="container p-2 mt-4 me-5">
                <div className="form-container">
                  <h4>Penalty Dashboard</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form_select">
                        <p>penalty month</p>
                        <select className="select_box border-0 mt-3">
                          <option selected className="text_grey text-bold">
                            Select Category
                          </option>
                          <option className="text-bold" value="1">
                            September 2020
                          </option>
                          <option value="2">Lorem Ipsum</option>
                          <option value="3">Lorem Ipsum</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="btn d-flex justify-content-end ">
                        <div>
                          <button className="btn-clear" type="reset">
                            Clear
                          </button>
                        </div>
                        <div className="">
                          <button className="btn-search" type="submit">
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-container">
                  <div className="row">
                    <div className="content1 d-flex">
                      <div className="col-md-6 head-content d-flex flex-column">
                        <h4>Insurance submission</h4>
                        <p>
                          Penalty for submission cycle:&nbsp;&nbsp;
                          <span>2020 (Penalty for September 2020)</span>
                        </p>
                      </div>
                      <div className="col-md-6 col-sm-9 icons">
                        <div className="icon-right d-flex justify-content-end pe-5">
                          <span className="d-flex">
                            <ImDownload3
                              style={{
                                color: 'chocolate',
                                paddingRight: '10px',
                                fontSize: '27px',
                              }}
                            />
                            <p>Export</p>
                          </span>
                          <span className="d-flex">
                            <CgPlayListSearch
                              style={{
                                color: 'rgb(177, 125, 97)',
                                paddingRight: '10px',
                                fontSize: '30px',
                              }}
                            />
                            <p>Clear all Search</p>
                          </span>
                          <span className="d-flex">
                            <RxCountdownTimer
                              style={{
                                color: 'rgb(177, 125, 97)',
                                paddingRight: '10px',
                                fontSize: '27px',
                              }}
                            />
                            <p>Clear sort</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table_section p-3">
                    <div className="row">
                      <DataTable
                        // DataTable={DataTable}
                        customStyles={customStyles}
                        columns={columns}
                        data={data}
                        selectableRows
                        fixedHeader
                        pagination
                      ></DataTable>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="proc_btn d-flex justify-content-end ">
            <div className="row">
              <div className="col-md-12">
                <button type="submit" name="" value="">
                  Generate Approval Note & Annexure
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PenaltyDashboard;

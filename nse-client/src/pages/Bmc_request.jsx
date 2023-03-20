import React from 'react';
import '../styles/Bmcrequest.css';

const Bmc_request = () => {
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
                <div className="req_title">
                  <h4>New Request</h4>
                </div>
                <div className="main_req_tit">
                  <h6>Main Request</h6>
                </div>
                <div className="form_select">
                  <p>Select Main Request</p>
                  <select className="select_box border-0 mt-3">
                    <option selected className="text_grey text-bold">
                      Select Category
                    </option>
                    <option className="text-bold" value="1">
                      BMC Category Change
                    </option>
                    <option value="2">Lorem Ipsum</option>
                    <option value="3">Lorem Ipsum</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container form">
          <form className="m-4">
            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <h4>Guidelines before you apply</h4>
                </div>
                <div className="form_para">
                  <p>
                    1.l/ We are aware, that the Exhanges’ dual power sources for
                    uninterrupted power supply to the collocation racks through
                    UPS and DG sets (also advised in Collocation guidelines;
                    Section: 2, Point No: 23) is a critical measure aimed at
                    safeguarding and protecting our equipment/s in case of any
                    unexposed power usages.
                  </p>
                  <p>
                    2.l/ We undertake that in case ay of our equipment/s in the
                    racks/s is not a dual power supply, I/We shall take sole
                    responsibility for such decision and shall be solely liable
                    for the consequences arising out of such volitional act.
                  </p>
                  <p>
                    {' '}
                    2.l/ We undertake that in case ay of our equipment/s in the
                    racks/s is not a dual power supply, I/We shall take sole
                    responsibility for such decision and shall be solely liable
                    for the consequences arising out of such volitional act.
                  </p>
                </div>
              </div>
            </div>
          </form>
          <div className="app_btn">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6">
                <input type="button" name="" value="start application" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Bmc_request;

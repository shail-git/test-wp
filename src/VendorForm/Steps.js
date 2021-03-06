// add form steps here then return components in stepper.js
import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";
import Typography from "@material-ui/core/Typography";
import { statelist, citylist, Banks } from "./state-city-data";
import sha256 from "crypto-js/sha256";
import md5 from "crypto-js/md5";
import Rtg from "./Rtg";
import "./steps.css";

const Step1 = ({onStep}) => {
  const [stateVal, setStateVal] = useState("Maharashtra");
  const [passMatch, setPassMatch] = useState(false);
  const [passValid, setPassValid] = useState(false);
  var firstInput;
  var secondInput;
  var pwd;
  var passVal;
  var regPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
  const Step=1;
  onStep(Step);
  const comparePassword = (event) => {
    event.preventDefault(); //incase you want to prevent certain things from happening
    if (firstInput.value === secondInput.value) {
      return true;
    } else {
      return false;
    }
  };
  const validityChecker = (event, reg, val) => {
    event.preventDefault();
    if (reg.test(val)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <>
      <div>
        <h2>Personal Information</h2>
        <br/>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="first">First Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="first"
                name="first"
                required
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}

          <div class="col-md-6">
            <div class="form-group">
              <label for="last">Last Name</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="last"
                name="last"
                required
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div className="col-md-4">
            <br />
            <input type="checkbox" name="whatsapp" value="whatsapp" id="whatsapp" /> Whatsapp
          </div>
        </div>
        {/* <!--  row   --> */}

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Email address"
                required
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div class="col-md-6">
            <div className="row">
              <div className="form-group col-sm-6">
                <label for="state">State</label>
                <select
                  class="form-control"
                  id="state"
                  name="state"
                  onChange={() => {
                    setStateVal(document.getElementById("state").value);
                    console.log(stateVal);
                  }}
                >
                  {statelist.map((x) => {
                    return x === "Maharashtra" ? (
                      <option selected value={x}>
                        {x}
                      </option>
                    ) : (
                      <option value={x}>{x}</option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group col-sm-6">
                <label for="city">City</label>
                <select class="form-control" name="city" id="city">
                  {citylist[stateVal].map((x) => {
                    return x === "Mumbai" ? (
                      <option selected value={x}>
                        {x}
                      </option>
                    ) : (
                      <option value={x}>{x}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="pswd">Password</label>
              <input
                type="password"
                class="form-control"
                id="pswd"
                name="password"
                placeholder="Password"
                ref={(input) => {
                  firstInput = input;
                }}
                onChange={(e) => {
                  passVal = document.getElementById("pswd").value;
                  setPassMatch(comparePassword(e));
                  setPassValid(validityChecker(e, regPass, passVal));
                }}
                required
              />
              {passValid ? (
                <Typography variant="caption" style={{ color: "green" }}>
                  *Password Valid
                </Typography>
              ) : (
                <Typography variant="caption" style={{ color: "red" }}>
                  *Password Invalid
                </Typography>
              )}
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div class="col-md-6">
            <div class="form-group">
              <label for="cpswd">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="cpswd"
                placeholder="Password"
                ref={(input) => {
                  secondInput = input;
                }}
                onChange={(e) => {
                  setPassMatch(comparePassword(e));
                  if (passValid) {
                    pwd = sha256(passVal).toString();
                    //send pwd here as it is not const
                  }
                }}
                required
              />
              {passMatch && passValid ? (
                <Typography variant="caption" style={{ color: "green" }}>
                  *Password matches
                </Typography>
              ) : (
                <Typography variant="caption" style={{ color: "red" }}>
                  *Password dosen't match
                </Typography>
              )}
            </div>
          </div>
        </div>
        {/* <!--  row   --> */}
      </div>
    </>
  );
};

const Step2 = ({onStep}) => {
  const Step=2;
  onStep(Step);

  return (
    <>
      <div>
        <h2>Work Information</h2>
        <br />
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="service">Service type</label>
              <Rtg id="service" name="service" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="Company">Company Name(if any):</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="company"
                name="company"
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="work">Previous Work</label>
              <input
                type="url"
                class="form-control"
                id="work"
                name="work"
                placeholder="Link of images of your previous work"
                required
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}

          <div class="col-md-6">
            <div className="form-group">
              <label for="area">Area of Operation</label>
              <input
                type="text"
                id="area"
                name="area"
                class="form-control"
                placeholder="E.g:Mumbai ..."
                required
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="social" >Social media links(if any)</label>
              <input type="url" name="social" class="form-control" id="social" />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}

          <div class="col-md-6">
            <div className="form-group">
              <label for="website">Website(if any)</label>
              <input type="url" id="website" name="website" class="form-control" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <h5>Are You ready for same day orders?</h5>
              <input type="radio" id="sdo" name="sdo" value="yes" /> Yes
              <br />
              <input type="radio" id="sdo" name="sdo" value="no" defaultChecked/> No
            </div>
          </div>
          {/* <!--  col-md-6   --> */}

          <div class="col-md-6">
            <div className="form-group">
              <label for="awareness">How did you find White Pocket?</label>
              <select className="form-control" name="awareness" id="awareness">
                <option value="Friends & Family">Friends & Family</option>
                <option value="Social media">Social media</option>
                <option value="Advertisements">Advertisements</option>
                <option value="Our team">Our team</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
    </>
  );
};

const Step3 = ({ isValid, onStep }) => {
  const [open, setOpen] = useState(false);
  const [accMatch, setAccMatch] = useState(true);
  const [accValid, setAccValid] = useState(false);
  const [panValid, setPanValid] = useState(false);
  const [ifscValid, setIfscValid] = useState(false);
  const [gstValid, setGstValid] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  var firstInput;
  var secondInput;
  var gstno;
  var ifsc;
  var accno;
  var pan;
  const Step=3;
  onStep(Step);
  const comparePassword = (event) => {
    event.preventDefault(); //incase you want to prevent certain things from happening

    if (firstInput.value === secondInput.value) {
      return true;
    } else {
      return false;
    }
  };

  //validation checks
  var panVal;
  var regPan = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  var accVal;
  var regAcc = /^[0-9]{9,18}$/;
  var ifscVal;
  var regIfsc = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  var gstVal;
  var regGst = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

  const validityChecker = (event, reg, val) => {
    event.preventDefault();
    if (reg.test(val)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div>
        <h2>Banking Information</h2>
        <br/>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="bank">Choose Bank:</label>
              <select class="form-control" id="bank" name="bank">
                {Banks.map((x) => {
                  return <option value={x}>{x}</option>;
                })}
              </select>
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div class="col-md-6">
            <div class="form-group">
              <label for="Branch">Branch name:</label>
              <input
                type="text"
                name="branch"
                class="form-control"
                id="Branch"
                placeholder="Bank's branch"
                required
              />
            </div>
          </div>
        </div>
        {/* <!--  row   --> */}
        <div class="row">
          {/* <!--  col-md-6   --> */}

          <div class="col-md-6">
            <h5>Are you GST Registered?</h5>
            <input
              type="radio"
              value="yes"
              id="gst"
              name="gst"
              onClick={() => setOpen(true)}
            />{" "}
            yes
            <br />
            <input
              type="radio"
              value="no"
              id="gst"
              name="gst"
              onClick={() => setOpen(false)}
            />{" "}
            no
            <br />
            <br />
          </div>
          <div class="col-md-6">
            <Collapse in={open}>
              <div class="form-group">
                <label for="gstno">GST no:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="GST Number"
                  id="gstno"
                  name="gstno"
                  onChange={(e) => {
                    gstVal = document
                      .getElementById("gstno")
                      .value.toUpperCase();
                    setGstValid(validityChecker(e, regGst, gstVal));
                    if (gstValid) {
                      gstno = md5(gstVal).toString();
                      //send gst no here as it is not constant
                    }
                  }}
                />
                {gstValid ? (
                  <Typography variant="caption" style={{ color: "green" }}>
                    *GST Number Valid
                  </Typography>
                ) : (
                  <Typography variant="caption" style={{ color: "red" }}>
                    *Gst Number Invalid
                  </Typography>
                )}
              </div>
            </Collapse>
          </div>
          {/* <!--  col-md-6   --> */}
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="Rname">Recipient name</label>
              <input
                type="text"
                class="form-control"
                id="Rname"
                name="rname"
                placeholder="Name"
                required
              />
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div class="col-md-6">
            <div class="form-group">
              <label for="accno">IFSC Code:</label>
              <input
                type="text"
                class="form-control"
                id="IFSC"
                name="ifsc"
                placeholder="IFSC"
                required
                onChange={(e) => {
                  ifscVal = document.getElementById("IFSC").value.toUpperCase();
                  setIfscValid(validityChecker(e, regIfsc, ifscVal));
                  if (ifscValid) {
                    ifsc = md5(ifscVal).toString();
                    //send ifsc no here as it is not constant
                  }
                }}
              />
              {ifscValid ? (
                <Typography variant="caption" style={{ color: "green" }}>
                  *IFSC Code Valid
                </Typography>
              ) : (
                <Typography variant="caption" style={{ color: "red" }}>
                  *IFSC Code Invalid
                </Typography>
              )}
            </div>
          </div>
        </div>
        {/* <!--  row   --> */}
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="accno">Account Number</label>
              <input
                type="tel"
                class="form-control"
                id="accno"
                name="accno"
                placeholder="ACC/No"
                required
                ref={(input) => {
                  firstInput = input;
                }}
                onChange={(e) => {
                  accVal = document.getElementById("accno").value.toUpperCase();
                  setAccMatch(comparePassword(e));
                  setAccValid(validityChecker(e, regAcc, accVal));
                  if (accValid) {
                    accno = md5(accVal).toString();
                    //send accno here as it is not constant
                  }
                }}
              />
              {accValid ? (
                <Typography variant="caption" style={{ color: "green" }}>
                  *Acc Number Valid
                </Typography>
              ) : (
                <Typography variant="caption" style={{ color: "red" }}>
                  *Acc Number Invalid
                </Typography>
              )}
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div class="col-md-6">
            <div class="form-group">
              <label for="caccno">Confirm Acc/ NO:</label>
              <input
                type="tel"
                class="form-control"
                id="caccno"
                placeholder="ACC/No"
                required
                ref={(input) => {
                  secondInput = input;
                }}
                onChange={(e) => setAccMatch(comparePassword(e))}
              />
              {accMatch ? (
                <Typography variant="caption" style={{ color: "green" }}>
                  *Acc/no matches
                </Typography>
              ) : (
                <Typography variant="caption" style={{ color: "red" }}>
                  *Acc/no dosen't match
                </Typography>
              )}
            </div>
          </div>
        </div>
        {/* <!--  row   --> */}
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="pan">Pan Number:</label>
              <input
                type="text"
                name="pan"
                class="form-control"
                id="pan"
                placeholder="Pan number"
                required
                onChange={(e) => {
                  panVal = document.getElementById("pan").value.toUpperCase();
                  setPanValid(validityChecker(e, regPan, panVal));
                  if (panValid) {
                    pan = md5(panVal).toString();
                    //send pan no here as it is not constant
                  }
                }}
              />
              {panValid ? (
                <Typography variant="caption" style={{ color: "green" }}>
                  *PAN Number Valid
                </Typography>
              ) : (
                <Typography variant="caption" style={{ color: "red" }}>
                  *PAN Number Invalid
                </Typography>
              )}
            </div>
          </div>
          {/* <!--  col-md-6   --> */}
          <div class="col-md-6">
            <div class="form-group">
              {/* <label for="accno">confirm Acc/ NO:</label>
              <input
                type="tel"
                class="form-control"
                id="con accno"
                placeholder="Acc/No"
              /> */}
            </div>
          </div>
        </div>
        {/* <!--  row   --> */}
        <div className="row">
          <div className="col-md-10 ">
            <input type="checkbox" value="agree" id="tnc" required onClick={()=>{isValid(accMatch&&accValid&&panValid&&ifscValid)}} />
        
            &nbsp;&nbsp;&nbsp;
            <lable for="tnc">
              Agree to our{" "}
              <strong
                className="tnc"
                style={{ color: "#000c52" }}
                onClick={() => setModalShow(true)}
              >
                Terms and Conditions
              </strong>{" "}
              and{" "}
              <strong
                className="tnc"
                style={{ color: "#000c52" }}
                onClick={() => setModalShow(true)}
              >
                Privacy policy
              </strong>{" "}
              &nbsp;&nbsp;&nbsp;
            </lable>
          </div>
          <br />
          <br />
          <br />
          <br />
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                WP policies for vendors
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Terms and Conditions</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <h4>Privacy Policy</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export { Step1, Step2, Step3 };

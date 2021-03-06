// add form steps here then return components in stepper.js
import React, { useState } from "react";
import MultiImageUpload from "./MultiImageUpload";
import Rtg from "./Rtg";
import Collapse from "react-bootstrap/Collapse";
import InfoButton from "./InfoButton";
// import Modal from "react-bootstrap/Modal";
import "./v_create.css";

const Step1 = ({ onStep }) => {
  const Step = 1;
  onStep(Step);
  const [yesopen, setOpen] = useState(false);
  const [noopen, setnoOpen] = useState(false);
  return (
    <>
      <div>
        <h2>Basic</h2>
        <br />

        <div class="row">
          {/* form */}
          <div class="col-md-8">
            <div class="form-group">
              <label>Title</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="first"
                name="first"
                required
              />
            </div>
            <div class="form-group">
              <label>Description</label>
              <textarea
                name="message"
                rows="6"
                cols="40"
                type="text"
                class="form-control"
              >
                Tell customers why this package is best!!!
              </textarea>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h2>Delivery Details</h2>
        <br />
        <div class="row">
          {/* form */}
          <div class="col-md-8">
            <div class="form-group">
              <h5>Does this package offer same day delivery ?</h5>
              <input
                type="radio"
                value="yes"
                id="gst"
                name="gst"
                onClick={() => {
                  setOpen(true);
                  setnoOpen(false);
                }}
              />{" "}
              Yes &nbsp;&nbsp;
              <input
                type="radio"
                value="no"
                id="gst"
                name="gst"
                onClick={() => {
                  setnoOpen(true);
                  setOpen(false);
                }}
              />{" "}
              No
            </div>
            <div class="form-group">
              <Collapse in={yesopen && !noopen}>
                <div class="form-group">
                  <label for="gstno">
                    How many hours prior are you ready to take up the order ?{" "}
                    <InfoButton
                      msg="If you type 4 hours it means you can deliver your package after 4 hours. Type your number of hours according to your preparation time."
                      header=" Delivery Info" //or pass variables for text to make code cleaner
                    />
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="eg: '4'"
                    id=""
                    name=""
                  />
                </div>
              </Collapse>
            </div>
            <div class="form-group">
              <Collapse in={noopen && !yesopen}>
                <div class="form-group">
                  <label for="gstno">
                    How many days prior are you ready to take up the order?{" "}
                    <InfoButton
                      msg="If you type 2 days it means you can deliver your package after 2 days. Type your number of hours according to your preparation time."
                      header=" Delivery Info" //or pass variables for text to make code cleaner
                    />
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="eg: '2'"
                    id=""
                    name=""
                  />
                </div>
              </Collapse>
            </div>
          </div>
        </div>

        <br />
        <br />
        <h2>Package Images</h2>
        <br />

        <MultiImageUpload />

        <br />
        <br />
      </div>
    </>
  );
};

const Step2 = ({ onStep }) => {
  const Step = 2;
  onStep(Step);

  return (
    <>
      <div>
        <h2>Highlights</h2>
        <br />

        <div class="row">
          {/* form */}
          <div class="col-md-8">
            <div class="form-group">
              <label>Highlight 1</label>
              <input
                type="text"
                class="form-control"
                placeholder=""
                id="first"
                name="first"
                required
              />
            </div>
            <div class="form-group">
              <label>Highlight 2</label>
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
        </div>

        <br />
        <br />
        <h2>Pricing</h2>
        <br />

        <div class="row">
          {/* form */}
          <div class="col-md-10">
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label>Market Price</label>
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
              <div className="col-md-6">
                <div class="form-group">
                  <label>White Pocket Price</label>
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
            </div>
          </div>
        </div>

        <br />
        <br />
        <h2>Details</h2>
        <br />

        <div class="row">
          {/* form */}
          <div class="col-md-8">
            <div class="form-group">
              <label>
                Package Inclusions{" "}
                <InfoButton
                  msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  header="Lorem Ipsum" //or pass variables for text to make code cleaner
                />{" "}
              </label>
              <Rtg id="service" name="service" />
            </div>
            <div class="form-group">
              <label>Note</label>
              <textarea
                name="message"
                rows="3"
                cols="40"
                type="text"
                class="form-control"
              >
                Tell customers what things to remember!!!
              </textarea>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </>
  );
};

const Step3 = ({ isValid, onStep }) => {
  const Step = 3;
  onStep(Step);
  // const [modalShow, setModalShow] = useState(false);
  // const [value, setValue] = React.useState("female");

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  return (
    <>
      <div>
        <h2>Confirm Package</h2>
        <br />

        <div className="col-md-6">
          <div class="form-group">
            <label>some tag line explaining preview </label>
            <br />
            <button type="button" className="btn submit_btn">
              Preview
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div class="form-group">
            <label>some tag line explaining Darft </label>
            <br />
            <button type="button" className="btn submit_btn">
              Darft
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div class="form-group">
            <label>some tag line explaining Upload </label>
            <br />
            <button type="button" className="btn submit_btn">
              Upload
            </button>
          </div>
        </div>

        <br />

        {/* <div>
          <input
            type="checkbox"
            value="agree"
            id="tnc"
            required
            onClick={() => {
              // isValid(accMatch && accValid && panValid && ifscValid);
            }}
          />
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
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <h4>Privacy Policy</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
        </Modal> */}
      </div>{" "}
    </>
  );
};

export { Step1, Step2, Step3 };

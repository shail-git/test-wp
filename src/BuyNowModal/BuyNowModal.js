import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./bnm.css";
const BNModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="container">
        <div className="row det">
          <form className="col-10">
            <h1>Enter the following details</h1>
            <label for="date" />
            Date Of Booking:&nbsp;
            <input type="date" id="date" name="date" />
            <br />
            <br />
            <label for="appt" />
            Approximate Duration of booking:&nbsp;
            <input type="time" id="appt" name="appt" /> (in hours)
            <br />
            <br />
            <lable for ='venue'/>Select a Venue:&nbsp;
            <input list="venue" name="venue" />
            <datalist id="venue">
              <option value="Internet Explorer" />
              <option value="chrome" />
            </datalist>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <input type="submit" className='btn btn-primary' value='Confirm' />
        <Button onClick={props.onHide}>Cancle</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default BNModal;

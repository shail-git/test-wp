import React, { useState } from "react";
import Reviews from "../Reviews";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

const R4 = ({Review}) => {
  //first four elements stored in this array for display
const Four = [{}, {}, {}, {}];

let i = 0;
for (i = 0; i < 4; i++) {
  Four[i] = Review[i];
}
  return (
    <div classname="row">
      <div className="col-md-12">
        <div className="row">
          {Four.map((info) => {
            return (
              <>
                <div className="col-6 col-md-3">
                  <Reviews info={info} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const All = ({Review}) => {
  return (
    <div classname="row">
      <div className="col-md-12">
        <div className="row">
          {Review.map((info) => {
            return (
              <>
                <div className="col-6 col-md-3">
                  <Reviews info={info} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ReviewComponent = ({Review}) => {
  const [open, setOpen] = useState(false);
  let ButtonText = open ? "Show Less" : "More reviews";
  return (
    <>
      <div id='section2'>
        <br/>
      </div>
      <Collapse in={open}>
        <div id="collapse-reviews">
          <All Review={Review}/>
        </div>
      </Collapse>
      <Collapse in={!open}>
        <div id="collapse-reviews">
          <R4 Review={Review}/>
        </div>
      </Collapse>   
      <div className="container text-right">
      <a href="#section2">
        <Button
          className="btn-rewiew allign-right"
          onClick={() => setOpen(!open)}
          aria-controls="collapse-reviews"
          aria-expanded={open}
        >
          {ButtonText}
        </Button>
        </a>
      </div>
    </>
  );
};

export default ReviewComponent;

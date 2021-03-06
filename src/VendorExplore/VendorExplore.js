import React from "react";
import DetailForm from "./Stepper";
import "./v_explore.css";

const VendorExplore = () => {
  return (
    <>
      <div className="wp-blue-bg">
        <div className="outter">
          <div className="boxed-content container">
            <br />
            <h1 className="text-center">Add your Explore Package here</h1>
            <br />
            <br />
            <div className="row container">
              <div className="col-md-12">
                <form id="VendorExplore" >
                  <DetailForm />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VendorExplore;

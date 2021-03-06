import React from "react";
import DetailForm from "./Stepper";
import "./t.css";

const VendorForm = () => {
  return (
    <div className="wp-blue-bg">
      <div className="outter">
        <div className="boxed-content container">
          <div style={{ padding: "3%" }}>
            <form id='VendorForm'>
              <DetailForm />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorForm;

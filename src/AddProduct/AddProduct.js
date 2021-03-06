import React from "react";
import "./addproduct.css";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
const AddProduct = () => {
  return (
    <div className="wp-blue-bg">
      <div className="outter">
        <div className="boxed-content container">
          <div className="container">
          <br/>
              <div className='row'>
              
                  <h2 className="col-md-12 text-center">Add your amazing product in ...</h2>
                  <br/>
                  <br/><br/>
                  <br/>
              </div>
            <div className="row text-center">
              <div className="col-md-6">
              <div className="add-box wp-blue-bg">
              
                    <br/>
                    <h1>Create</h1>
                    
                    <br/>
                    <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h6>
                    <br/>
                    <br/>
                    <button className="add-button"><AddCircleIcon/> Add in Create</button>             
              </div>
              </div>
              <div className="col-md-6">
              <div className="add-box wp-blue-bg">
              
                    <br/>
                    <h1>Explore</h1>
                    <br/>
                    
                    <h6>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h6>
                    <br/>
                    <br/>
                    <button className="add-button"><AddCircleIcon/> Add in Explore</button>             
              </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProduct;

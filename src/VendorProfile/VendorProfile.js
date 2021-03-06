import React from "react";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { NavLink } from "react-router-dom";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import "./vendorprofile.css";

var info = {
  name: "Shail Shah",
  region: "Mumbai",
  code: "#WP420",
};

const Items = [
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
  },
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
  },
];

const Card = ({ Item }) => {
  return (
    <>
      <NavLink exact to={Item.to} className="col-md-12 col-md-6 tdn">
        <div className="row">
          <div className="col-4 col-md-5">
            <img className="img-fluid" src={Item.src} alt="" />
          </div>
          <div className="col-4 col-md-4 text-left">
            <h4 className="pack-name">{Item.name}</h4>
            <span className="star">
              {" "}
              <StarRoundedIcon /> <i className="rate">{Item.rate}</i>
            </span>
            <br />
            <br />
          </div>
          <div className="col-4 col-md-3 text-right">
            <h4 className="item-price">&nbsp;&nbsp;₹{Item.price}</h4>
            <p className="item-discount">
              <strike className="cut">₹{Item.discount}</strike> {Item.percent}%
              off
            </p>

            <p className="pocket-verified">
              <VerifiedUserIcon />
            </p>
          </div>
        </div>

        <hr className="con" />
      </NavLink>
    </>
  );
};

const VendorProfile = () => {
  return (
    <div className="wp-blue-bg">
      <div className="outter">
        <div className="boxed-content container">
          <div className="row">
            <img
              className="ppim"
              src="https://www.vortexiot.com/media/1055/bryce-davey-square.jpg"
              alt=""
              width="150px"
              height="auto"
            />
            <div className="info">
            <h6 className="store-top">This is</h6> 
            <h1>{info.name}'s</h1>
            <h6 className="store-btm">white pocket store from {info.region}</h6>  
            <h5 className="">{info.code} </h5>
            <h5 className=""><i style={{color:'#000c52'}}> <VerifiedUserIcon /></i> Pocket Verified Seller</h5>
            </div>
          </div>
          <br/><br/><br/>
        <div className="row container text-left">
            <h5>All Packages</h5>
        </div>
        <hr className="" />
          <div className="row cards">
            {Items.map((item) => {
              return <Card Item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default VendorProfile;

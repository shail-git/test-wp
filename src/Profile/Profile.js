import React, { useState } from "react";
import "./profile.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import EditIcon from '@material-ui/icons/Edit';
import w from "../wp.png";
import { NavLink } from "react-router-dom";
import StarRoundedIcon from "@material-ui/icons/StarRounded";


var info = {
  name: "Shail Shah",
  email: "shail@gmail.com",
  gender: "male",
  address: "mumbai",
  no: "1234567890"
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

const SelectedCard = ({ Item }) => {
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

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Banner */}
      <div className="profile-header row">
        <br />
        <h2 className="header-text col-md-9">Profile</h2>
        
        {/* add logo to right */}
      </div>
      <br />
      <div className="container">
        <div className="row box">
          <div classname="col-md-2 d-flex justify-content-center">
            <div className="profile">
            <img
              className="round img-fluid"
              src="https://i1.sndcdn.com/artworks-000360212961-sv1tzp-t500x500.jpg"
              alt="profile pic"
              width="150px"
              height="auto"
            />
            </div>
          </div>
          <div className="col-md-7">
            <ul className="">
              <h3>Hello,</h3>
              <h1>{info.name}</h1>
              <h5>+91 {info.no}</h5>
              <h5>{info.email}</h5>
              <br/>
              <p className="ver"><VerifiedUserIcon/> Pocket Verified User</p>
              
            </ul>
          </div>
          <div className="col-md-3 text-center">
          <button className="log-bttn log-bt"><ExitToAppOutlinedIcon/> Log out</button>
          <br/><br/>
          </div>
        </div>
        <div className="row box">
          <h5 className="col-10 col-md-11">Edit Profile</h5>
          <button
            className="col-2 col-md-1 edit"
            onClick={() => setOpen(!open)}
            aria-controls="collapse-reviews"
            aria-expanded={open}
          >
            <EditIcon/>
          </button>
          <hr className="" />
          <Collapse in={open}>
            <ul className="col-md-12 ">
              <li>
                Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input className='pl col-md-8' placeholder ={info.name} />
              </li>
              <br/>
              <li>
                Gender &nbsp;&nbsp;&nbsp;: <input className='pl col-md-8' placeholder ={info.gender} />
              </li>
              <br/>
              <li>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input className='pl col-md-8' placeholder ={info.email} />
              </li>
              <br/>
              <li>
                Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input className='pl col-md-8' placeholder ={info.no} />
              </li>
              <br/>
              <li>
                Address &nbsp;&nbsp;: <input className='pl col-md-8' placeholder ={info.address} /> 
              </li>
              <br/>
            </ul>
          </Collapse>
        </div>
        
        <div className="row box">
        <h5 className="col-10 col-md-11">My Past Orders</h5>
        <br/><br/>
        <hr className=''/>
          {Items.map((item) => {
              return <SelectedCard Item={item} />;
            })}
        </div>
        <br/>
        
      </div>
    </div>
  );
};
export default Profile;

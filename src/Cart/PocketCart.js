import React from "react";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { NavLink } from "react-router-dom";
import "./cart.css";

const Items = [
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    Highlight1: "highlight1",
    Highlight2: "highlight2",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    type: "all",
  },
  {
    name: "Package Name",
    to: "/createdetails",
    src: "https://picsum.photos/200/280/?blur",
    Highlight1: "highlight1",
    Highlight2: "highlight2",
    rate: "4.7",
    price: 2499,
    discount: 2999,
    percent: 17,
    type: "all",
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

            <ul className="high">
              <li>{Item.Highlight1}</li>
              <li>{Item.Highlight2}</li>
            </ul>
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

const PocketCart = () => {
  return (
    <div>
      {/* Banner */}
      <div className="cart-header">
        <br />
        <h2 className="header-text">Your pocket</h2>
      </div>
      <br />
      {/* items and total */}
      <div className="container">
        <div className="row">

            
              

          <div className="col-md-7 box">
            <h2 className="pkg_title">In Your Pocket</h2>
            <hr className="con" />
            {Items.map((item) => {
              return <SelectedCard Item={item} />;
            })}
          </div>


          <div className="col-md-4 box">
              <h2 className="pkt-title">Pocket Details</h2>
              <hr className="con" />
              <div >
                {Items.map((item) => {
                  return (
                    <li className="row">
                      <h6 className="col-md-9 text-left">{item.name}</h6>
                      <p className="col-md-3 text-right">₹ {item.price}</p>
                    </li>
                  );
                })}
              </div>
              <hr className="con" />
             
                <li className="row">
                  <h5 className="col-md-8 text-left">Total</h5>
                  <h5 className="col-md-4 text-right">₹ 3000</h5>
                </li>
            
            <br />
            <button type="button" className="btn-cart col-md-12">
              {" "}
              Place Order
            </button>
          </div>

             


          
          
        </div>
      </div>
    </div>
  );
};
export default PocketCart;

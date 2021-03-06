import React, { useState } from "react";
import "./card.css";
import Dropdown from "react-bootstrap/Dropdown";
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ban2m from "../ban2m.png";
import ban2 from "../ban2.png";
import { NavLink } from "react-router-dom";

let width =  window.screen.width;

console.log(width);
const Items = [
  {
    name: "Package Name",
    to: "/PocketSinglesDetails",
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
    to: "/PocketSinglesDetails",
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
    to: "/PocketSinglesDetails",
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
    to: "/PocketSinglesDetails",
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
    to: "/PocketSinglesDetails",
    src: "https://picsum.photos/200/280/?blur",
    Highlight1: "highlight1",
    Highlight2: "highlight2",
    rate: "4.7",
    price: 2599,
    discount: 2999,
    percent: 17,
    type: "all",
  },
  {
    name: "Package Name",
    to: "/PocketSinglesDetails",
    src: "https://picsum.photos/200/280/?blur",
    Highlight1: "highlight1",
    Highlight2: "highlight2",
    rate: "4.7",
    price: 2299,
    discount: 2999,
    percent: 17,
    type: "all",
  },
  {
    name: "Package Name",
    to: "/PocketSinglesDetails",
    src: "https://picsum.photos/200/280/?blur",
    Highlight1: "highlight1",
    Highlight2: "highlight2",
    rate: "4.7",
    price: 2899,
    discount: 2999,
    percent: 17,
    type: "all",
  },
  {
    name: "Package Name",
    to: "/PocketSinglesDetails",
    src: "https://picsum.photos/200/280/?blur",
    Highlight1: "highlight1",
    Highlight2: "highlight2",
    rate: "4.7",
    price: 3099,
    discount: 2999,
    percent: 17,
    type: "all",
  },
  
];
//default sorted as decending
Items.sort((a, b) => {
  return a.price - b.price;
});

const Card = ({ Item }) => {
  return (
    <>
      <NavLink  exact to={Item.to} className="col-12 col-md-6 tdn">
        <div className="row">
          <div className="col-4 col-md-5 ">
            
              <img className="img-fluid" src={Item.src} alt="" />
            
          </div>
          <div className="col-4 col-md-4 text-left">
            <h4 className="pack-name">{Item.name}</h4>
            <span className="star">
              {" "}
              <StarRoundedIcon/>{" "}<i className="rate">{Item.rate}</i>
            </span>
            <br/>
            <br/>
            
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
            
            <p className="pocket-verified"><VerifiedUserIcon/></p>
          </div>
        </div>
        
        <hr className="con" />
      </NavLink>
    </>
  );
};

const PocketSingles = () => {
   // filter categories
  const [fil1, setfil1] = useState("all");
  const [fil2, setfil2] = useState("all");
  const [fil3, setfil3] = useState("all");

  const [sort, setSort] = useState("LowToHigh"); // for sortting by proce or ~popularity

  return (
    <div>
      <div className="page-banner">
        {
          width > 500? <img src={ban2} className="img-fluid" width="100%" alt="" />: <img src={ban2m} className="img-fluid" width="100%" alt="" />}
      
        <h2 className="banner-text">Pocket Singles</h2>
      </div>
      <div className="container-fluid row gap text-center">
        <h6 className="col-5 col-md-2 txt">Found: 6 results</h6>
        <div className="col-3 col-md-1">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Filters
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="filter form-group">
                <form>
                  {fil1 === "featured" ? (
                    <input type="checkbox" Name="featured" defaultChecked />
                  ) : (
                    <input type="checkbox" Name="featured" />
                  )}{" "}
                  Featured
                  <br />
                  {fil2 === "flash" ? (
                    <input type="checkbox" Name="flash" defaultChecked />
                  ) : (
                    <input type="checkbox" Name="flash" />
                  )}{" "}
                  Flash Deals
                  <br />
                  {fil3 === "last" ? (
                    <input type="checkbox" Name="last" defaultChecked />
                  ) : (
                    <input type="checkbox" Name="last" />
                  )}{" "}
                  Last Minute
                  <br />
                  <br />
                  <input
                    type="submit"
                    value="Apply"
                    style={{
                      backgroundColor: "white",
                      
                      border: "1px solid darkblue",
                      borderRadius: "5px",
                      padding: "5px 20px",
                    }}
                  />
                </form>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="col-3 col-md-1">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Sort by
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="sort">
                <input
                  type="radio"
                  name="sort"
                  defaultChecked
                  onClick={() => {
                    console.log("lth");
                    setSort("LowToHigh");
                  }}
                />{" "}
                Low To High <br />
                <input
                  type="radio"
                  name="sort"
                  onClick={() => {
                    console.log("htl");
                    setSort("HighToLow");
                  }}
                />{" "}
                High To Low
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <br />
      <div className="container-fluid row text-center">
        {Items.filter((item) => item.type.includes(fil1))
          .filter((item) => item.type.includes(fil2))
          .filter((item) => item.type.includes(fil3))
          .map((item) => {
            sort === "LowToHigh"
              ? Items.sort((a, b) => {
                  return b.price - a.price;
                })
              : sort === "HighToLow"
              ? Items.sort((a, b) => {
                  return a.price - b.price;
                })
              : console.log("none");
            return <Card Item={item} />;
          })}
      </div>
    </div>
  );
};

export default PocketSingles;

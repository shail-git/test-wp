import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import HelpIcon from '@material-ui/icons/Help';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WorkIcon from '@material-ui/icons/Work';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import DnsIcon from '@material-ui/icons/Dns';
import "./vendordashboard.css";
import { NavLink } from "react-router-dom";

var info = {
  name: "Krutik Patel",
  region: "Mumbai",
  code: "#WP420",
  views:'15K',
  orders:'420',
  growth:'69%',
  packages:'25',
  email: 'abc@mail.com',
  phone: '12345 67890'
};

const VendorDashboard = () => {
  return (
    <div className="outter">
      <div className=" container">
        <div className="row">
          <div className="col-md-5 text-center">
          <img
              className="ppim "
              src="https://www.vortexiot.com/media/1055/bryce-davey-square.jpg"
              alt=""
              width="100px"
              height="auto"
            />
            <h6 className="store-top">This is</h6> 
            <h1>{info.name}'s</h1>
            <h6 className="store-btm">white pocket store from {info.region}</h6> 
            <br/>
                
            <h6 className="">{info.code} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {info.email}</h6>      
                
            
            

            <br/>
          </div>
          <div className="col-md-7 ">
          
            <div className="row stats">
              <div className="col-6 col-md-3 text-center">
                <h5 className="stat-name">Views</h5>
                <h1 className="">{info.views}</h1>
                <h5 className=" g">+340</h5>
                <VisibilityIcon/>
                <br/><br/>
              </div>

              <div className="col-6 col-md-3 text-center">
                <h5 className="stat-name">Orders</h5>
                <h1 className="">{info.orders}</h1>
                <h5 className=" g">+12</h5>
                <WorkIcon/>
                <br/><br/>
              </div>

              <div className="col-6 col-md-3 text-center">
                <h5 className="stat-name">Growth</h5>
                <h1 className="">{info.growth}</h1>
                <h5 className=" r">-1%</h5>
                <TrendingUpIcon/>
              </div>

              <div className="col-6 col-md-3 text-center">
                <h5 className="stat-name">Packages</h5>
                <h1 className="">{info.packages}</h1>
                <h5 className=" g">+1</h5>
                <DnsIcon/>
              </div>
            </div>
          </div>
        </div>
        </div>
        
        <br />
        <br />
        <br />
       
        <h6 className="container text-left mind">
          What's on your mind today!!
        </h6>

        
        <div className="container">
        <div className="row">
        <div className="col-6 col-md-2">
          <NavLink to='/' className="tdn">
            <div className="wp-blue-bg w box">
            <div className="text-center">
              <br/>
            <h2><AddCircleOutlineIcon /></h2>
            <br/>
              <h5>Add Package</h5>
              
            </div>
              
            </div>
          </NavLink>
          </div>
          <div className="col-6 col-md-2">
          <NavLink to='/' className="tdn">
            <div className="wp-blue-bg w box">
            <div className="text-center">
            <br/>
            <h2><EditIcon /></h2>
            <br/>
              <h5>Edit Package</h5>
            </div>
             
            </div>
          </NavLink>
          </div>
          
          <div className="col-6 col-md-2">
          <NavLink to='/' className="tdn">
            <div className="wp-blue-bg w box">
            <div className="text-center">
            <br/>
            <h2><FormatListBulletedIcon /></h2>

              <h5>Your Packages</h5>
            </div>
              
            </div>
          </NavLink>
          </div>
          <div className="col-6 col-md-2">
          <NavLink to='/' className="tdn">
            <div className="wp-blue-bg w box">
              <div className="col text-center">
              <br/>
              <h2><AccountCircleIcon /></h2>
              <br/>
              <h5>Your Profile</h5>
              </div> 
            </div>
          </NavLink>
          </div>
          <div className="col-6 col-md-2">
          <NavLink to='/' className="tdn">
            <div className="wp-blue-bg w box">
            <div className="text-center">
            <br/>
            <h2><ShowChartIcon /></h2>
            <br/>
              <h5>Detailed Stats</h5>
              
            </div>
              
            </div>
          </NavLink>
          </div>
          <div className="col-6 col-md-2">
          <NavLink to='/' className="tdn">
            <div className="wp-blue-bg w box">
            <div className="text-center">
            <br/>
            <h2><HelpIcon /></h2>
              <h5>Technical Support</h5>
            </div>
              
            </div>
          </NavLink>
          </div>
        </div>
        </div>

      </div>
    
  );
};

export default VendorDashboard;

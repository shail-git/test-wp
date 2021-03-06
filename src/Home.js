import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import w from "./wave.png";
import {wave} from "./wave.png";
import Aos from "aos";
import 'aos/dist/aos.css';
import lax from "lax.js";
import wp from "./wp.png";
import x from "./x.png";
import  c  from "./c.png";
import  e  from "./e.png";
import wr from "./wave_rev.png";
import "./Home.css";
import Mouse from "./Mouse";
import Carousel from 'react-bootstrap/Carousel'

const WPBanner = [
  {
    src:'https://www.shinco.in/wp-content/uploads/2019/06/Banner-1600x600-px.png',
  },
  {
    src:'https://www.shinco.in/wp-content/uploads/2019/06/Banner-1600x600-px.png',
  },
  {
    src:'https://www.shinco.in/wp-content/uploads/2019/06/Banner-1600x600-px.png',
  },
]

const AutoCarousel = ({Images}) =>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        Images.map((image)=>{
          return(
          <Carousel.Item>
            <img
              className="dblock"
              src= {image.src}
              alt="First slide"
              width="100%"
              height="auto"
            />
          </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

const Home = () => {

  useEffect(()=>{

    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(
      ".spinMe",
      {
        scrollY: {
          rotate: [
            [0, 360],
            [0, 360]
          ]
        }
      },
      []
    );

   Aos.init({
    offset: 400,
    duration: 700,
    
   });  
  }, [] )

  return (
    <>
      <div className="container">
        
        <div className='row'>
          
          <li><NavLink exact to="/Create"> Create Events </NavLink></li>
          <li><NavLink exact to="/Explore"> Explore Events </NavLink></li>
        <li><NavLink exact to="/PocketCart"> PocketCart </NavLink></li>
        <li><NavLink exact to="/profile"> Profile </NavLink></li>
        <li><NavLink exact to="/contactus"> Contact </NavLink></li>
      
        </div>
      </div>

       {/* home page starts here */}



      <div className="bl-bcg">
          <div className="container">
            <div className="row">
              <div className="col-md-5 text-center">
              
              <h1 className="name" data-lax-preset="spin">White Pocket </h1>
                <h5 className="tag">Events & Entertainment</h5>
                <button className="bttn web-bt">Start Pocketing</button>
       
                
              </div>
              <div className="col-md-7">
                <br/>
                <div className="mouse"><Mouse/></div>
                
                
                {/* image appears here */}
                {/* <img src={wp}  className="img-fluid" data-aos="flip-left" /> */}
              </div>
            
            </div>
          </div>
          
        </div>
        <div>
        <img src={w}  className="img-fluid wave-rev"/>
        </div>
       
        <div className="">
          <div className="container text-center">

            {/*featured banner start */}
            <div className="crousal-gap">
            <h1 className="">White Pocket featured Events</h1>
            <br/><br/>
              <AutoCarousel Images={WPBanner}/>
            </div>
            {/*featured banner start */}

            <h1 className="">What we do</h1>
            <br/><br/>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus congue massa, et euismod ante. Pellentesque vestibulum felis ut orci dignissim sollicitudin. Vestibulum mollis est eget ante dignissim auctor. Nulla id eros nec dui vulputate tempus. Vestibulum nec nunc imperdiet, blandit nunc a, pharetra augue. Vestibulum sollicitudin diam eget elit faucibus molestie. Integer vitae augue efficitur, imperdiet orci non, posuere neque. Nulla quis mi id orci tristique fringilla. Etiam sit amet ullamcorper erat. Donec blandit urna quam, ac varius eros lobortis ut. Proin sed ante purus. Nulla pulvinar augue felis, vel sollicitudin odio cursus in. Ut egestas ante iaculis magna aliquam, in gravida ipsum sodales. Nulla accumsan ac nisl vitae rutrum.</h6>
            <br/><br/>
            
          
            
            
          </div>




        </div>
        <div>
        <img src={wr}  className="img-fluid wave-rev"/>
        </div>
        <div className="below-wave">
        
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="c-content text-left">
                <h1 className="display-3">Create</h1>
                <h5>c content trial  ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus congue massa, et euismod ante. Pellentesque vestibulum felis ut orci dignissim sollicitudin. Vestibulum mollis est eget ante dignissim auctor. Nulla id eros nec dui vulputate tempus. Vestibulum nec nunc imperdiet, blandit nunc a</h5>
                <button className="bttn web-bt">Start Creating</button>
                <br/><br/><br/><br/>
              </div>
            </div>
            <div className="col-md-5">
              <div className="c-rot text-center">
                <img src={c}  className="img-fluid c-img" data-aos="zoom-out-down" />
              </div>
              <br/><br/>
              <br/><br/>
            </div>
          </div>
        </div>
        </div>


        <div>
        <img src={w}  className="img-fluid wave-rev"/>
        </div>

        <div className="container text-center">
            <div className="">
            <h1 className="what">Patner With Us</h1>
            <br/><br/>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus congue massa, et euismod ante. Pellentesque vestibulum felis ut orci dignissim sollicitudin. Vestibulum mollis est eget ante dignissim auctor. Nulla id eros nec dui vulputate tempus. Vestibulum nec nunc imperdiet, blandit nunc a, pharetra augue. Vestibulum sollicitudin diam eget elit faucibus molestie. Integer vitae augue efficitur, imperdiet orci non, posuere neque. Nulla quis mi id orci tristique fringilla. Etiam sit amet ullamcorper erat. Donec blandit urna quam, ac varius eros lobortis ut. Proin sed ante purus. Nulla pulvinar augue felis, vel sollicitudin odio cursus in. Ut egestas ante iaculis magna aliquam, in gravida ipsum sodales. Nulla accumsan ac nisl vitae rutrum.</h6>
            <br/><br/>
            </div>
 
          </div>

          <div>
        <img src={wr}  className="img-fluid wave-rev"/>
        </div>

        <div className="below-wave">
        
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="c-content text-left">
                <h1 className="display-3">Explore</h1>
                <h5>c content trial  ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus congue massa, et euismod ante. Pellentesque vestibulum felis ut orci dignissim sollicitudin. Vestibulum mollis est eget ante dignissim auctor. Nulla id eros nec dui vulputate tempus. Vestibulum nec nunc imperdiet, blandit nunc a</h5>
                <button className="bttn web-bt">Start Exploring</button>
                <br/><br/><br/><br/>
              </div>
            </div>
            <div className="col-md-5">
              <div className="c-rot text-center">
                <img src={e}  className="img-fluid c-img" data-aos="zoom-out-down" />
              </div>
              <br/><br/>
              <br/><br/>
            </div>
          </div>
        </div>
        </div>
        
        <div>
        <img src={w}  className="img-fluid wave-rev"/>
        </div>



        {/* <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <div className="create">
              
              
              <br/><br/>
              <img src={c}  className="img-fluid c-img" data-aos="flip-left" />
              
              <br/><br/>
              <h6>some line to attract pople to check create section by clinkcg thr button</h6>
              <button className="bttn web-bt">Start Creating</button>
              <br/><br/>
              </div> 
            </div>
            <div className="col-md-6 ">
            <div className="explore">
            
             
              <br/><br/>
              <img src={e}  className="img-fluid e-img" data-aos="flip-right" />
              <br/><br/>
              <h6>some line to attract pople to check create section by clinkcg thr button</h6>
              <button className="bttn web-bt">Start Exploring</button>
              <br/><br/>
              </div>
            </div>
          </div>
        </div> */}
       <br/><br/><br/><br/><br/><br/>
        
          
      
        
    </>
  );
};

export default Home;

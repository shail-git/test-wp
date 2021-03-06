import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reccomended from "../Reccomended";

const ReccomendedCarousel = ({Reccomend}) => {
    let width = window.screen.width;
    let slides = width > 760 ? 3 : width > 500 ? 2 : 1;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: 1,};
    if (width > 500) {
      return (
        <div
          style={{
            backgroundColor: "#ffff",
            paddingBottom: "20px",
            paddingTop: "20px",
            paddingLeft: "50px",
            paddingRight: "50px",
            border: "solid",
            borderRadius: "5px",
            borderColor: "#0000",
          }}
          className="container"
        >
          <Slider {...settings}>
            {Reccomend.map((info) => {
              return (
                <div className="">
                  <Reccomended info={info} />
                </div>
              );
            })}
          </Slider>
        </div>
      );
    } else {
      return (
        <div
          style={
            {
              // backgroundColor: "#000080",
              // paddingBottom: "20px",
              // paddingTop: "20px",
              // paddingLeft: "50px",
              // paddingRight: "50px",
              border: "solid",
              borderRadius: "5px",
              borderColor: "#0000",
            }
          }
        >
          <div className="row">
          <div className="col-12">
          <div className="row">
            {Reccomend.map((info) => {
              return (
                <> 
                  <div className="col-6">
                  <Reccomended info={info} />
                  </div>
                </>
              );
            })}
            </div>
          </div>
          
        </div>
        </div>
      );
    }
  }
export default ReccomendedCarousel;

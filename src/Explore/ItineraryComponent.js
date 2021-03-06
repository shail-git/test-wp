import React from "react";
import "./explore.css";

const Item = ({ Day }) => {
  return (
    <>
      <div className="days">
        <div className="row">
          <div className="col-md-2 text-center">
            <h3>{Day.day}</h3>
            <h5>{Day.loc}</h5>
            <br />
          </div>
          <div className="col-md-10">
            {Day.points.map((point) => {
              return <li className="text-left">{point}</li>;
            })}
          </div>
        </div>
      </div>

      <br />
    </>
  );
};

const ItineraryComponent = ({ Itinerary }) => {
  return (
    <div>
      <h2>Itinerary:</h2>
      <br />
      {Itinerary.map((Day) => {
        return <Item Day={Day} />;
      })}
    </div>
  );
};
export default ItineraryComponent;

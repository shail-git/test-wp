import React, { useState } from "react";
import DayInputs from "./DayInputs";

import "./style.css";

const CreateItinerary = () => {
  const [allValid, setAllValid] = useState(true);
  const [ItinerararyState, setItinerararyState] = useState({
    Itinerarary: "",
    description: "",
  });

  const handleItinerararyChange = (e) =>
    setItinerararyState({
      ...ItinerararyState,
      [e.target.name]: [e.target.value],
    });

  const blankDay = { Feilds: [{ value: "" }], location: "" };
  const [DayState, setDayState] = useState([{ ...blankDay }]);
  function removeItemOnce(arr, index) {
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  const addDay = () => {
    setDayState([...DayState, { ...blankDay }]);
  };
  const handleAddFeild = (Feildsin, idx) => {
    const updatedDays = [...DayState];
    updatedDays[idx].Feilds = Feildsin;
    updatedDays[idx].Feilds.push({ value: "" });
    // console.log(updatedDays);
    setDayState(updatedDays);
  };
  const handleRemoveFeild = (Feildsin, idx, idy) => {
    const updatedDays = [...DayState];
    updatedDays[idx].Feilds = removeItemOnce(Feildsin, idy);

    // console.log(updatedDays[idx]);
    setDayState(updatedDays);
  };
  const handleDayChange = (e, Feilds, idx) => {
    const updatedDays = [...DayState];
    updatedDays[e.target.dataset.idx]["Feilds"] = Feilds;
    updatedDays[e.target.dataset.idx]["location"] = document.getElementById(
      `loc-${idx}`
    ).value;
    // console.log(updatedDays);
    setDayState(updatedDays);
  };

  const handleDayRemove = (e, idx) => {
    console.log(e.target);
    console.log(DayState);
    const updatedDays = [...DayState];
    // console.log(updatedDays);
    let x = removeItemOnce(updatedDays, idx);
    console.log(x);
    setDayState(x);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.getElementById("ItineraryForm").checkValidity()) {
      setAllValid(true);
      console.log(DayState);
      console.log(ItinerararyState);
      console.log("all Good!");
    } else {
      setAllValid(false);
      console.log("not looking good");
    }
  };

  return (
    <div className="">
      <form className="dform" id="ItineraryForm">
        {/* <label htmlFor="Itinerarary">Itinerarary</label>
        <input
          type="text"
          name="Itinerarary"
          id="Itinerarary"
          value={ItinerararyState.Itinerarary}
          onChange={handleItinerararyChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={ItinerararyState.description}
          onChange={handleItinerararyChange}
        /> */}
        
        {DayState.map((val, idx) => (
          <DayInputs
            key={`Day-${idx}`}
            idx={idx}
            handleDayChange={handleDayChange}
            handleDayRemove={handleDayRemove}
            DayState={DayState}
            handleAddFeild={handleAddFeild}
            handleRemoveFeild={handleRemoveFeild}
          />
        ))}

        <input
          type="button"
          value="Add Day"
          onClick={addDay}
          className="btn submit_btn"
        />
        {/* <input
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit(e)}
          className="btn-success"
          style={{
            padding: "10px 20px",
            borderRadius: "10px",
            border: "1px solid white",
          }}
        /> */}
        <p style={{ color: "red" }}>
          {allValid
            ? ""
            : "*Please make sure you have filled all the fields in the form before submitting"}
        </p>
      </form>
      <br/>
      <br/>

    </div>
  );
};

export default CreateItinerary;

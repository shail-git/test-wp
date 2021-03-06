import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import PropTypes from "prop-types";
import "./style.css";
const DayInputs = ({
  idx,
  handleDayChange,
  handleDayRemove,
  DayState,
  handleAddFeild,
  handleRemoveFeild,
}) => {
  const [Feilds, setFeilds] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...Feilds];
    // console.log(event);
    values[i].value = event.target.value;
    setFeilds(values);
  }

  function handleAdd() {
    const values = [...Feilds];
    values.push({ value: null });
    setFeilds(values);
    handleAddFeild(Feilds, idx);
  }

  function handleRemove(i) {
    const values = [...Feilds];
    values.splice(i, 1);
    setFeilds(values);
    // console.log(Feilds);
    handleRemoveFeild(Feilds, idx, i);
  }
  return (
    <>
    <label>
          Enter Itinery for Day {idx + 1}
        </label>
    <div
      id={`day-${idx + 1}`}
      onChange={(e) => handleDayChange(e, Feilds, idx)}
      data-idx={idx}
      className="day col-md-12"
    >
      
      <div className="row">
        <div className="col-8 col-md-9">
        <h3
          className=""
        >
          Day {idx + 1}
        </h3>
        </div>
        <div className="col-4 col-md-3 text-right">
        <button
            id={`removeDay-${idx + 1}`}
            type="button"
            onClick={(e) => handleDayRemove(e, idx)}
            className="btn btn-danger"
          >
            <DeleteIcon/> 
          </button>
        </div>
      </div>
      <br/>
      
      <div className="">
        
      <label>Location of the day</label>
        <div className="">
          
        <input
          type="text"
          placeholder="eg: Delhi"
          data-idx={idx}
          id={`loc-${idx}`}
          className="form-control col-md-8"
          required
        />
        </div>
        
        
        {/* <div
          className="col-md-2"
          style={{
            padding: "3px 10px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            id={`removeDay-${idx + 1}`}
            type="button"
            onClick={(e) => handleDayRemove(e, idx)}
            className="btn btn-danger"
            style={{ padding: "3px 10px", margin: "-10px 0px 15px 0px" }}
          >
            X
          </button>
        </div> */}
      </div>
        <br/>
        <label>Itinerarary list</label>
      {Feilds.map((field, idy) => {
        // console.log(DayState[idx].Feilds[idy].value);
        return (
          <div key={`${field}-${idy}-of-day${idx + 1}`} className="row field">
            <div className="col-9 col-md-10">
            <input
              id={`item-${idy}-of-${idx + 1}`}
              type="text"
              placeholder="eg: Breakfast"
              data-idx={idx}
              data-idy={idy}
              value={DayState[idx].Feilds[idy].value || ""}
              onChange={(e) => handleChange(idy, e)}
              className="form-control "
            />
            </div>
            <div className="col-2 col-md-2">
            <button
              type="button"
              id={`rmField-${idy}-${idx}`}
              onClick={() => handleRemove(idy)}
              className="btn btn-danger"
            >
              <HighlightOffIcon/>
            </button>
            </div>
            
            
            <br/><br/>
          </div>
          
          
        );
      })}
      <div className="">
        <br/>
        <button
          type="button"
          onClick={(e) => handleAdd()}
          style={{ padding: "5px 17px" }}
          className="btn bt-add"
        >
          <AddCircleOutlineOutlinedIcon/>&nbsp;
          Add Item
        </button>
      </div>
    </div>
    </>
  );
};

DayInputs.propTypes = {
  idx: PropTypes.number,
  handleDayChange: PropTypes.func,
  handleDayRemove: PropTypes.func,
  handleAddFeild: PropTypes.func,
  handleRemoveFeild: PropTypes.func,
  DayState: PropTypes.array,
};

export default DayInputs;

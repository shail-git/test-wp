import React from "react";
import ReactTags from "react-tag-autocomplete";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import "./RTG.css";
// List of ops in the world
var ops = [
  "Decorations",
  "Venue",
  "Production",
  "Sound & Lights",
  "Make up/Mehendi",
  "Singer/Band/Muisician",
  "Magician",
  "Anchor",
  "DJ",
  "Choreographer",
  "Photography",
  "Cakes",
  "Gifting",
  "E-gifting",
  "Tours & adventures",
  "Transport/Car rentals",
];

const suggest = ops.map((op) => {
  const check = (a) => {
    return a === op;
  };
  return { id: ops.findIndex(check), name: op };
});

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Suggestions</Popover.Title>
    <Popover.Content>
      <ul>
      {ops.map((op)=>{
        return <li>{op}</li> 
      })}
      </ul>
      or Others of your choice...
    </Popover.Content>
  </Popover>
);

class Rtg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
      suggestions: suggest,
    };

    this.reactTags = React.createRef();
  }

  onDelete(i) {
    const tags = this.state.tags.slice(0);
    tags.splice(i, 1);
    this.setState({ tags });
  }

  onAddition(tag) {
    function contains(obj, list) {
      var x;
      for (x in list) {
        if (list.hasOwnProperty(x) && list[x] === obj) {
          return true;
        }
      }
      return false;
    }
    var x = document.getElementsByClassName("react-tags__search-input")[0]
      .value;
    if (!contains(tag, this.state.suggestions)) {
      tag = { id: ops.length, name: x };
      ops.push(x);
    }
    const tags = [].concat(this.state.tags, tag);
    this.setState({ tags });
  }

  render() {
    return (
      <div className="row">
        <OverlayTrigger  placement="left" overlay={popover}>
          <ReactTags
            id="tag"
            ref={this.reactTags}
            tags={this.state.tags}
            suggestions={this.state.suggestions}
            onDelete={this.onDelete.bind(this)}
            onAddition={this.onAddition.bind(this)}
          />
        </OverlayTrigger>

        <button className="rtg-btns" onClick={this.onAddition.bind(this)}>
          {/* <AddRoundedIcon/>
           */}<AddCircleOutlineRoundedIcon/>
        </button>
      </div>
    );
  }
}

export default Rtg;

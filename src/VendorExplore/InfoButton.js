import React from "react";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (msg, header) => {
  return (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{header}</Popover.Title>
      <Popover.Content>{msg}</Popover.Content>
    </Popover>
  );
};

const InfoButton = ({ msg, header }) => {
  return (
    <>
      <OverlayTrigger trigger="click" placement="right" overlay={popover(msg,header)}>
        <InfoOutlinedIcon />
      </OverlayTrigger>
    </>
  );
};

export default InfoButton;

import React from "react";
import { Box, PopupBox, CloseIcon } from "./popup.elements";
 
const Popup = props => {
  return (
    <PopupBox onClick={props.handleClose}  cursor={props.cursor}>
      <Box>
        <CloseIcon className="close-icon"  onClick={props.handleClose}>x</CloseIcon>
        {props.content}
      </Box>
    </PopupBox>
  );
};
 
export default Popup;
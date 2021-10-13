import React from "react";
import { BiCheck } from "react-icons/bi";
import "../styles/dropdown.css";

const DropDownItem = (props) => {
  return (
    <div className="dropDownItem">
      <h6>
        <BiCheck /> {props.section}
      </h6>
    </div>
  );
};

export default DropDownItem;

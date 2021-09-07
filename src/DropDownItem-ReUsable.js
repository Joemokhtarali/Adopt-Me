import React from "react";
import { BiCheck } from "react-icons/bi";
import "../styles/dropdown.css";

const DropDownItem = (props) => {
  return (
    <div>
      <h6 className="dropDownItem">
        <BiCheck /> {props.section}
      </h6>
    </div>
  );
};

export default DropDownItem;

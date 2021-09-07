import React from "react";
import DropDownItem from "./DropDownItem-ReUsable";
import "../styles/dropdown.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const DropDownSection = (props) => {
  const { id, name, sections } = props;
  return (
    <div className="dropdown">
      <button className="dropbtn">
        {name} <FaAngleDown />
      </button>

      <div className="dropdown-content">
        {sections.map((section) => {
          return <DropDownItem section={section} />;
        })}
      </div>
    </div>
  );
};

export default DropDownSection;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import DropDownSection from "./DropDownSection-ReUsable";
import "./dropdown.css";

// This is dummy data where I am iterating to add each iteration into a DropDownSection component
// each will take data and a function to manage the state for that component
const times = {
  id: "time",
  name: "time",
  sections: [
    { name: "Any Time", id: "Any Time" },
    { name: "Last 7 days", id: "Last 7 days" },
    { name: "Last 30 days", id: "Last 30 days" },
    { name: "Last 90 days", id: "Last 90 days" },
    { name: "2021", id: "2021" },
    { name: "2020", id: "2020" },
  ],
};
const locations = {
  id: "locations",
  name: "locations",
  sections: [
    { name: "All Locations", id: "All Locations" },
    { name: "U.S.", id: "U.S." },
    { name: "Foreign Correspondents", id: "internacional" },
    { name: "Australia", id: "australia" },
    { name: "Hong Kong", id: "hong_kong" },
    { name: "Russia", id: "russia" },
    { name: "South Korea", id: "south_korea" },
    { name: "United Kingdom", id: "uk" },
  ],
};
const sortings = {
  id: "sort-by",
  name: "Sort by",
  sections: [
    { name: "Sort by", id: "Sort by" },
    { name: "Relevancy", id: "Relevancy" },
    { name: "Newest To Oldest", id: "Newest To Oldest" },
    { name: "Oldest To Newest", id: "Oldest To Newest" },
  ],
};

const sections = {
  id: "sections",
  name: "sections",
  sections: [
    { name: "All Sections", id: "All Sections" },
    { name: "People & Culture", id: "people_and_culture" },
    { name: "Company & Product News", id: "company_and_product_news" },
    { name: "Benefits & Resources", id: "benefits_and_resources" },
    { name: "Safety & security", id: "safety_and_security" },
    { name: "Okta & technology", id: "okta_and_technology" },
  ],
};

const AdvancedFilters = (props) => {
  // takes props of section from <SearchResults />
  // const {
  //   changeSection,
  //   resetButtonState,
  //   changeTimeState,
  //   changeSortByState,
  //   changeLocation,
  //   resetFilters,
  // } = props;

  // useEffect(() => {
  //   console.log('hello');
  // }, [resetFiltersFunc]);

  // const resetFiltersFunc = () => {
  //   resetFilters();
  // };
  const resetButtonState = true;

  return (
    <div className="moreFilters">
      {/* This div will take DropDownSection Reusable components, which has select tag */}
      {/* DATA prop will be options array as in the dummy data in the bottom
       and selector which is a function that will update the state here */}
      <div className="DropDownMenu">
        <DropDownSection
          data={times}
          // selector={changeTimeState}
          // resetButtonState={resetButtonState}
        />
        <DropDownSection
          data={sections}
          // selector={changeSection}
          // resetButtonState={resetButtonState}
        />
        <DropDownSection
          data={locations}
          // selector={changeLocation}
          // resetButtonState={resetButtonState}
        />
        <DropDownSection
          data={sortings}
          // selector={changeSortByState}
          // resetButtonState={resetButtonState}
        />

        <div className="dropdown">
          <button
            className="dropbtn-reset"
            type="button"
            // onClick={resetFiltersFunc}
            // disabled={resetButtonState}
            // style={
            //   resetButtonState
            //     ? { border: "none", opacity: "30%" }
            //     : { border: "#d3d3d3 solid 0.5px" }
            // }
          >
            Reset
          </button>
        </div>
      </div>
      {/* End of Div for DropDownMenu */}
    </div>
  );
};

export default AdvancedFilters;

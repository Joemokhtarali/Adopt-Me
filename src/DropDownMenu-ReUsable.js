import React from "react";
import DropDownSection from "./DropDownSection-ReUsable";
import "../styles/dropdown.css";

const DropDownMenu = () => {
  return (
    <div className="DropDownMenu">
      {info.map((ele) => {
        return (
          <DropDownSection
            key={ele.id}
            name={ele.name}
            sections={ele.sections}
          />
        );
      })}
    </div>
  );
};

export default DropDownMenu;

const info = [
  {
    id: "any-time",
    name: "Any Time",
    sections: [
      "Any Time",
      "Last 7 days",
      "Last 30 days",
      "Last 90 days",
      "2021",
      "2020",
    ],
  },
  {
    id: "all-sections",
    name: "All Sections",
    sections: [
      "People & Culture",
      "Company & Product News",
      "Benefits & Resources",
      "Safety & Security",
      "Okta & Technology",
    ],
  },
  {
    id: "location",
    name: "Location",
    sections: [
      "All",
      "U.S.",
      "Foreign Correspondents",
      "Australia",
      "Hong Kong",
      "Russia",
      "South Korea",
      "United Kingdom",
    ],
  },
  {
    id: "sort-by",
    name: "Sort by",
    sections: ["Newest to Oldest", "Oldest to Newest", "Relevancy"],
  },
];

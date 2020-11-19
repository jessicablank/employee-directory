import React from "react";
import { FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import  "../styles/SearchBox.css"

const HandleSearch = ({ updateFilter }) => {
  const filterChangeHandler = (event) => {
    updateFilter({ name: event.target.value });
  };

  return (
    <div>
      <InputGroup size="lg" className="mb-3 search-box">
          <InputGroup.Prepend>
          <InputGroup.Text>Search By Agent Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
        placeholder="Start Typing ... "
        aria-label="Search By Agent Name"
        onChange={filterChangeHandler}
      />
      </InputGroup>
    </div>
  );
};

export default HandleSearch;

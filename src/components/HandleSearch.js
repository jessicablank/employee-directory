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
      <InputGroup responsive="true" size="lg" className="mb-3 search-box">
          <FormControl
        placeholder="Search By Agent Name ... "
        aria-label="Search By Agent Name"
        onChange={filterChangeHandler}
        id="search-box"
      />
      </InputGroup>
    </div>
  );
};

export default HandleSearch;

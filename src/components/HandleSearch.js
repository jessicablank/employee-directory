import React from 'react';

const HandleSearch = ({updateFilter}) => {

    const filterChangeHandler = (e) => {
        updateFilter({name: e.target.value})
    }

    return (
        <div className="content">
            <input type="text" className="form-control" placeholder="Search by Agent Name" onChange={filterChangeHandler}></input>
        </div>
    );
};

export default HandleSearch;
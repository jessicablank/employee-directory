import React from 'react';

const SortToggle = ({field, sortClickHandler, sortObj}) => {

    const sortClass = 
        sortObj.field !== field?
            "fa fa-sort":
                sortObj.order === "asc"?
                "fa fa-sort-up":
                "fa fa-sort-down";

    return (
        <i className={sortClass} aria-hidden="true" title="Click to Sort" onClick={sortClickHandler} data-field={field} style={{cursor:"pointer"}}></i>
    );
};

export default SortToggle;
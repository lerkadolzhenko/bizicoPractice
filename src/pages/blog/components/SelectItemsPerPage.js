import React from "react";

export const SelectItemsPerPage = ({ onSelectValueItems }) => {

  return (
    <div align="left" className='col-md-3 col-sm-6'>
      <label htmlFor="selectItems" className="col-form-label-sm">Select amount of items</label>
      <select className='custom-select' id='selectItems' onChange={(event) => {
          console.log(event.target)
          onSelectValueItems(event.target.value)}}>
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="90">90</option>
      </select>
    </div>
  );
};

export default SelectItemsPerPage;

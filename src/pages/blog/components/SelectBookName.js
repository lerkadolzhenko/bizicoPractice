import React from "react";

export const SelectBookName = ({ onInputBookName, searchText }) => {
  return (
    <div align="right" className=" ml-auto col-md-3 col-sm-6">
      <label htmlFor="inputNameBook" className="col-form-label-sm">Book Name</label>
      <input
        onChange={(event) => {
          onInputBookName(event.target.value);
        }}
        type="text"
        value={searchText}
        className="form-control"
        placeholder="Name of book"
        aria-label="name"
        aria-describedby="basic-addon1"
        id="inputNameBook"
      />
    </div>
  );
};

export default SelectBookName;

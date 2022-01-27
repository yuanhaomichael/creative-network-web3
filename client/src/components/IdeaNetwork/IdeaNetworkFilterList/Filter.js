import React, { useState } from "react";
import Select from "react-select";
import "./Filter.scss";

const Filter = ({ options, handleChange,name }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  return (
    <div className="mb-3 mr-3 w-20 d-inline-block">
      <span className="mr-3 fixed-width-100">{name}:</span>

      <Select
        value={selectOptions}
        options={options}
        isMulti
        onChange={(ops) => {
          setSelectOptions(ops);
          handleChange(ops);
        }}
        className="filter"
      />
    </div>
  );
};

export default Filter;

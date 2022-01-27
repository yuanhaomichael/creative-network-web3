import React, {useState} from 'react';
import Select from 'react-select';

function Filter(props) {
    let options = [];
    
    for (let i = 0; i < props.options.length; i++) {
        options.push({value: props.options[i], label: props.options[i]});
    }

    const [selectedOption, setSelectedOption] = useState(null);
    console.log(options);
    return (
        <div className="mb-3 mr-3 w-20 d-inline-block">
          <span className="mr-3 fixed-width-100">{props.name}:</span>
          <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
          />
        </div>
    );
}

export default Filter;


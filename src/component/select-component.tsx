import React, { useState } from 'react';
import Select from 'react-select';
interface SelectComponentProps {
  selectionType: string;
  options: any[];
  onSelect: (selectionType: string, selectedOptions: any) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ selectionType,options, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (data: any) => {
    setSelectedOptions(data);
    onSelect(selectionType, data);
  };
  const isMultiSelect = selectionType === 'Gene IDs';
  return (
    <>
      <h2>Select {selectionType}:</h2>
      <Select
        options={options}
        placeholder={`Select ${selectionType}`}
        value={selectedOptions}
        onChange={handleSelect}
        isSearchable={true}
        isMulti={isMultiSelect}
      />
    </>
  );
};

export default SelectComponent;

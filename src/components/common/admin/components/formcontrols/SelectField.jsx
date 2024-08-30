import React from 'react';

const SelectField = ({
  label,
  inputId,
  options,
  selectedValue,
  onChange,
  containerClassName = 'form-group row',
  labelClassName = 'col-md-3 mt-2',
  selectClassName = 'select2 form-select shadow-none',
  style = { width: '100%', height: '36px' },
}) => {
  return (
    <div className={containerClassName}>
      <label className={labelClassName}>{label}</label>
      <div className="col-md-9">
        <select
          id={inputId}
          className={selectClassName}
          value={selectedValue}
          onChange={onChange}
          style={style}
        >
          <option value="">Select</option>
          {options.map((option, index) =>
            'options' in option ? (
              <optgroup key={index} label={option.label}>
                {option.options.map((opt, idx) => (
                  <option key={idx} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ) : (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default SelectField;

import React from 'react';

const Input = ({
  name,
  handleChange,
  label,
  type,
  placeholder,
  handleShowPassword,
}) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

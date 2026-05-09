import React from 'react';

function InputWithLabel({ id, value, onInputChange, type = 'text', children }) {
  return (
    <div className="search">
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        placeholder="Search by title..."
      />
    </div>
  );
}

export default InputWithLabel;
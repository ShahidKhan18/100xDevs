import React from 'react'

const ButtonWarning = ({ warning, toText, to, onClick }) => {
  return (
    <div className="text-center mt-2">
      {warning} ?{" "}
      <span className="underline cursor-pointer" onClick={onClick}>
        {toText}
      </span>
    </div>
  );
};

export default ButtonWarning
import React from 'react';

export const Toggler = (props) => {

  return (
    <div className="menu-btn" onClick={props.click}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}
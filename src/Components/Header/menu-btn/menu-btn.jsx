import React from 'react';

export const Toggler = (props) => {

  return (
    <div className="menu-btn" onClick={() => alert('clicked')}>
      <div className="menu-btn__burger"></div>
    </div>
  );
}
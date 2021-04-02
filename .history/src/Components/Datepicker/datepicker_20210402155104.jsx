import React, { useState } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatepickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <label>
        <Datepicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
      </label>
    </>
  );
};

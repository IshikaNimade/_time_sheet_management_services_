import React, { useState, useEffect } from "react";
import ReactDateRangePicker from "react-daterange-picker";
import "react-daterange-picker/dist/css/react-calendar.css";
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);

const DateRangePicker = ({ startMoment, endMoment, onSubmit = () => {} }) => {
  const getInitialRange = () => {
    const moment1 = startMoment ? startMoment : moment().subtract(7, "days");
    const moment2 = endMoment ? endMoment : moment();
    return moment.range(moment1, moment2);
  };
  const [rangeValue, setRangeValue] = useState(getInitialRange());

  useEffect(() => {
    setRangeValue(getInitialRange());
    /* eslint-disable-next-line */
  }, [startMoment, endMoment]);

  console.log({ start: rangeValue.start });

  return (
    <ReactDateRangePicker
      value={rangeValue}
      onSelect={setRangeValue}
      singleDateRange={true}
    />
  );
};

export default DateRangePicker;
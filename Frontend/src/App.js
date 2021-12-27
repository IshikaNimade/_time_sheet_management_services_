import React , { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUpload from './components/FileUpload';
import Dates from './components/daterange';
//import React, { useState } from "react";
import DateRangePicker from "./components/DateRangePicker";

import { extendMoment } from "moment-range";
import originalMoment from "moment";

function App() {
  return (
    <div className="App">

      <h1 className="card text-white bg-info" style={{"marginTop":"20px","marginBottom":"50px"}}>Time Sheet Management Services</h1>

     <div className="App list-group-item justify-content-center align-items-center mx-auto"
     style={{"width":"1100px","background-color":"white","marginTop":"20px","marginBottom":"20px"}}>

     <div className="card-body">
     <h5 className="card text-white bg-dark mb-5">_Upload_task_sheet_</h5>
			<div><FileUpload /></div>
     </div>
     const moment = extendMoment(originalMoment);
     export default function App() {
     const stateDefinitions = {
     available: {
      color: null,
      label: "Available"
      },
      enquire: {
      color: "#ffd200",
      label: "Enquire"
      },
    unavailable: {
      selectable: false,
      color: "#78818b",
      label: "Unavailable"
    }
  };

  const dateRanges = [
    {
      state: "enquire",
      range: moment.range(moment(), moment())
    },
    {
      state: "unavailable",
      range: moment.range(moment().add(1, "days"), moment().add(5, "days"))
    }
  ];

  const [value, setValue] = useState(null);
  const [states, setStates] = useState();
  const handleSelect = (range, states) => {
    setValue(range);
    setStates(states);
  };

  return (
    <div className="App">
      {/* <DateRangePicker /> */}
      <DateRangePicker
        firstOfWeek={1}
        numberOfCalendars={2}
        selectionType="range"
        minimumDate={new Date()}
        stateDefinitions={stateDefinitions}
        dateStates={dateRanges}
        defaultState="unavailable"
        showLegend={true}
        value={value}
        onSelect={handleSelect}
      />
    </div>
  );
}

     </div>



    </div>
  );
}

export default App;

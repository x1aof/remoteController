import { Radio } from "antd";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const [switc, setSwitc] = useState(true);
  const switcClick = () => {
    setSwitc((off) => !off);
    console.log(switc);
  };

  const remoteUpClick = () => {
    console.log("up");
  };

  const remoteDownClick = () => {
    console.log("down");
  };

  const remoteLeftClick = () => {
    console.log("left");
  };

  const remoteRightClick = () => {
    console.log("right");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>遥控模式 </Radio>
          <Radio value={2}>AI模式</Radio>
        </Radio.Group>
        <br></br>
        <br></br>
        <br></br>
        <div className="control-wrapper">
          <div
            onClick={remoteUpClick}
            className={value === 1 ? "control-btn control-top" : ""}
          ></div>
          <div
            onClick={remoteLeftClick}
            className={value === 1 ? "control-btn control-left" : ""}
          >
            {" "}
          </div>
          <div
            onClick={remoteDownClick}
            className={value === 1 ? "control-btn control-bottom" : ""}
          ></div>
          <div
            onClick={remoteRightClick}
            className={value === 1 ? "control-btn control-right" : ""}
          ></div>

          <div className="control-round">
            <div className="control-round-inner" onClick={switcClick}>
              {switc === true ? "OFF" : "ON"}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import { Radio } from "antd";
import React, { useState, useEffect } from "react";
import "./App.css";
import { send } from "./request";

function App() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    send(msg);
    console.log(msg);
  }, [msg]);

  const [value, setValue] = useState("ord");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    send(value);
    console.log(value);
  }, [value]);

  const [switc, setSwitc] = useState(true);
  const switcClick = () => {
    setSwitc((off) => !off);
  };
  useEffect(() => {
    if (switc) {
      send("off");
      console.log("off");
    } else {
      send("on");
      console.log("on");
    }
  }, [switc]);

  return (
    <div className="App">
      <header className="App-header">
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={"ord"}>遥控模式 </Radio>
          <Radio value={"ai"}>AI模式</Radio>
        </Radio.Group>
        <br></br>
        <br></br>
        <br></br>
        <div className="control-wrapper">
          <div
            onClick={() => setMsg("up")}
            className={value === "ord" ? "control-btn control-top" : ""}
          ></div>
          <div
            onClick={() => setMsg("left")}
            className={value === "ord" ? "control-btn control-left" : ""}
          >
            {" "}
          </div>
          <div
            onClick={() => setMsg("down")}
            className={value === "ord" ? "control-btn control-bottom" : ""}
          ></div>
          <div
            onClick={() => setMsg("right")}
            className={value === "ord" ? "control-btn control-right" : ""}
          ></div>

          <div className="control-round">
            <div
              className={
                switc ? "control-round-inner-off" : "control-round-inner-on"
              }
              onClick={switcClick}
            >
              {switc ? "OFF" : "ON"}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

import React from "react"
import MainBoard from "../MainBoard/MainBoard"
import OtherBoards from "../OtherBoards/OtherBoards"

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <MainBoard data={props.data}/>
      <OtherBoards data={props.data}/>
    </div>
  );
}

import React, { useContext } from "react";
import AppContext from "../Services/Context/AppContext";

function ComponentB() {
  const { data } = useContext(AppContext);
  return <div>ComponentB {data}</div>;
}

export default ComponentB;

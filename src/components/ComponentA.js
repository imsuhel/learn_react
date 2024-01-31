import React, { useContext, useState } from "react";
import AppContext from "../Services/Context/AppContext";

function ComponentA() {
  const { data, setData } = useContext(AppContext);

  return (
    <div>
      ComponentA {data}
      <button onClick={() => setData("new content")}>edit</button>
    </div>
  );
}

export default ComponentA;

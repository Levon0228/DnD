/** @format */

import React from "react";
import Item from "./Item";
import s from "./Dnd.module.css";

const RightColumn = () => {
  return (
    <div className={`${s.column} ${s.right}`}>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default RightColumn;

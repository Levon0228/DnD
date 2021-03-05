/** @format */

import React from "react";
import s from "./Dnd.module.css";
import { Draggable } from "react-beautiful-dnd";

const Item = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          className={s.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Item;

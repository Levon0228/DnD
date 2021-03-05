/** @format */

import React from "react";
import s from "./Dnd.module.css";
import Item from "./Item";
import { Droppable } from "react-beautiful-dnd";

const LeftColumn = ({ column, tasks }) => {
  console.log(column);
  return (
    <div className={`${s.column} ${s.left}`}>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}>
            {tasks.map((task, index) => (
              <Item key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default LeftColumn;

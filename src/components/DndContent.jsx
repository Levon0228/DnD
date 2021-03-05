/** @format */

import React from "react";
import { DragDropContext } from "react-beautiful-dnd";

import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import s from "./Dnd.module.css";

const DndContent = ({ state, onDragEnd }) => {
  return (
    <div className={s.main}>
      <DragDropContext onDragEnd={onDragEnd}>
        {state.DndReducer.columnOrder.map((columnId) => {
          const column = state.DndReducer.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId) => state.DndReducer.tasks[taskId]
          );
          return <LeftColumn key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
};

export default DndContent;

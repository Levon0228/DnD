/** @format */

import { initialData } from "./initialData";

const DRAGEND = "DRAG-END";

const DndReducer = (state = initialData, action) => {
  switch (action.type) {
    case DRAGEND:
      const { destination, source, draggableId } = action.result;
      if (!destination) {
        return state;
      }

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return state;
      }

      if (destination.droppableId !== source.droppableId) {
        const dragable = state.columns[source.droppableId];
        const dropable = state.columns[destination.droppableId];
        const dragableTaskIds = Array.from(dragable.taskIds);
        dragableTaskIds.splice(source.index, 1);
        const newdragable = {
          ...dragable,
          taskIds: dragableTaskIds,
        };

        const dropableTaskIds = Array.from(dropable.taskIds);
        dropableTaskIds.splice(destination.index, 0, draggableId);
        const newdropable = {
          ...dropable,
          taskIds: dropableTaskIds,
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newdragable.id]: newdragable,
            [newdropable.id]: newdropable,
          },
        };

        return newState;
      }

      const column = state.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      return newState;
    default:
      return state;
  }
};

export const DragEndCreator = (result) => ({
  type: DRAGEND,
  result,
});

export default DndReducer;

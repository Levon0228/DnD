/** @format */

import { connect } from "react-redux";
import { DragEndCreator } from "../redux/DndReducer";
import DndContent from "./DndContent";

const mapStateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => {
  return {
    onDragEnd: (result) => dispatch(DragEndCreator(result)),
  };
};

const DndContanier = connect(mapStateToProps, mapDispatchToProps)(DndContent);
export default DndContanier;

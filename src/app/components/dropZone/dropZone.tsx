import * as React from "react";
import "./dropZone.css";
export class DropZone extends React.Component {
  render(): JSX.Element {
    return (
      <div
        className={"dropZone"}
        onDrop={(...arg) => {
          console.log("Drop", { arg });
        }}
        onDragOver={(...arg) => {
          console.log("DragOver", { arg });
        }}
        onDropCapture={(...arg) => {
          console.log("DropCapture", { arg });
        }}
        onDragCapture={(...arg) => {
          console.log("dragCapture", { arg });
        }}
      >
        DropZone works!
      </div>
    );
  }
}

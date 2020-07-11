import * as React from "react";
import "./fixedSideMenu.css";
export class FixedSideMenu extends React.Component {
  render(): JSX.Element {
    return (
      <div id="mySidenav" className="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    );
  }
}

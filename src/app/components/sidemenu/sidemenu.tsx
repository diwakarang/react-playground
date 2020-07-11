/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import * as React from "react";
import "./sidemenu.css";
const navLinks = [
  { url: "/about-us", name: "About Us" },
  { url: "/projects", name: "Projects" },
  { url: "/services", name: "Services" },
  { url: "/contact-us", name: "Contact Us" },
  { url: "/contact-us", name: "Contact Us" },
  { url: "/contact-us", name: "Contact Us" }
];
export class Sidemenu extends React.Component {
  state: { menuStatus: any; style: any } = {
    style: "menu",
    menuStatus: "close"
  };
  constructor(props) {
    super(props);
    this.state = {
      style: "menu",
      menuStatus: "close"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // eslint-disable-next-line @typescript-eslint/tslint/config
  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "menu"
        });
        break;
      case "close":
        this.setState({
          menuStatus: "open",
          style: "menu active"
        });
        break;
    }
  }

  render(): JSX.Element {
    let openStatus = this.state.menuStatus;
    let style = this.state.style;
    return (
      <div>
        <div className={"menu active primary"}>
          <ul>
            {[1, 2, 3, 4].map(el => {
              return (
                <li>
                  <div className={"sidemenu-icons"} onClick={this.handleClick}>
                    {el}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {openStatus === "open" ? (
          <div>
            <div className={style} style={{ marginLeft: "50px" }}>
              <ul className={"menuList"}>
                {navLinks.map(({ url, name }) => (
                  <li>
                    <div className={"sidemenu-child"} href={url}>
                      <ul className={"child-elements-list"}>
                        {[1, 2, 3].map(e => {
                          return (
                            <li className={"child-elements-list-item"}>
                              <div
                                style={{ background: "white", padding: "10px",color:"black" }}
                              >
                                <span>{e}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="spacer">
              <span>&nbsp;</span>
            </div> */}
          </div>
        ) : null}
      </div>
    );
  }
}

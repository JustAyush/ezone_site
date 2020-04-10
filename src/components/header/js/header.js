import React, { Component } from "react";

import { NavLink, withRouter } from "react-router-dom";

import styles from "../scss/header.module.scss";

import logoBlackText from "../../../assets/images/logoBlackText.png";
import logoWhiteText from "../../../assets/images/logoWhiteText.png";
import { throwStatement } from "@babel/types";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navScrolled: false,
      overlayNav: false,
      logoBlackText: true
    };
    this.navbar = React.createRef();
    this.navContent = React.createRef();
    this.overlayNav = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    this.prev = window.scrollY;
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    // detecting scroll down
    if (this.prev > window.scrollY) {
      this.navbar.current.style.top = 0;
      this.navContent.current.style.backgroundColor = "white";
      this.navContent.current.style.boxShadow =
        "0px 3px 15px rgba(0, 0, 0, 0.2)";
      this.navbar.current.style.top = "0";
      if (window.scrollY === 0) {
        this.navbar.current.style.top = 0;
        this.navContent.current.style.backgroundColor = "transparent";
        this.navContent.current.style.boxShadow = "none";
        this.setState({
          navScrolled: false,
          logoBlackText: true
        });
      } else {
        this.setState({
          navScrolled: true,
          logoBlackText: false
        });
      }
    }
    // detecting scroll up
    else if (this.prev < window.scrollY) {
      this.navbar.current.style.top = "-15vh";
      this.navContent.current.style.backgroundColor = "transparent";
      this.navContent.current.style.boxShadow = "none";
      this.setState({
        navScrolled: true,
        logoBlackText: true
      });
    }
    this.prev = window.scrollY;
  };

  showOverlayNav = () => {
    this.setState(prevState => ({
      overlayNav: !prevState.overlayNav
    }));
  };

  render() {
    return (
      <header>
        <div className={styles.navContent} ref={this.navContent}>
          <nav ref={this.navbar}>
            <div className={styles.logo}>
              <img
                src={this.props.workDetail ? logoBlackText : this.state.logoBlackText ? logoWhiteText : logoBlackText}
                className={styles.brandLogo}
                alt="ezone-logo"
                onClick={() =>
                  this.props.history.push({
                    pathname: `/`
                  })
                }
              />
            </div>

            {/* navbar for desktop view */}
            <ul className={styles.navDesktop}>
              <li>
                <NavLink
                  exact
                  to="/"
                  className={
                    this.props.workDetail
                      ? `${styles.myNavLinkScrolled}`
                      : !this.state.navScrolled
                      ? `${styles.myNavLink}`
                      : `${styles.myNavLinkScrolled}`
                  }
                  activeClassName={styles.active}
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/services"
                  className={
                    this.props.workDetail
                      ? `${styles.myNavLinkScrolled}`
                      : !this.state.navScrolled
                      ? `${styles.myNavLink}`
                      : `${styles.myNavLinkScrolled}`
                  }
                  activeClassName={styles.active}
                >
                  services
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/works"
                  className={
                    this.props.workDetail
                      ? `${styles.myNavLinkScrolled}`
                      : !this.state.navScrolled
                      ? `${styles.myNavLink}`
                      : `${styles.myNavLinkScrolled}`
                  }
                  activeClassName={styles.active}
                >
                  our works
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/events"
                  className={
                    this.props.workDetail
                      ? `${styles.myNavLinkScrolled}`
                      : !this.state.navScrolled
                      ? `${styles.myNavLink}`
                      : `${styles.myNavLinkScrolled}`
                  }
                  activeClassName={styles.active}
                >
                  events
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/about"
                  className={
                    this.props.workDetail
                      ? `${styles.myNavLinkScrolled}`
                      : !this.state.navScrolled
                      ? `${styles.myNavLink}`
                      : `${styles.myNavLinkScrolled}`
                  }
                  activeClassName={styles.active}
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/contact"
                  className={
                    this.props.workDetail
                      ? `${styles.myNavLinkScrolled}`
                      : !this.state.navScrolled
                      ? `${styles.myNavLink}`
                      : `${styles.myNavLinkScrolled}`
                  }
                  activeClassName={styles.active}
                >
                  contact us
                </NavLink>
              </li>
            </ul>

            <div
              // className={styles.burger}
              className={
                !this.state.overlayNav
                  ? `${styles.burger}`
                  : `${styles.burgerClose}`
              }
              onClick={this.showOverlayNav}
            >
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </div>
          </nav>
        </div>

        {/* navbar for mobile view */}
        <div
          className={
            !this.state.overlayNav
              ? `${styles.overlayNav}`
              : `${styles.overlayNavShow}`
          }
          ref={this.overlayNav}
        >
          <ul className={styles.navMobile}>
            <li>
              <NavLink
                exact
                to="/"
                className={styles.mobileNavLink}
                activeClassName={styles.active}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/services"
                className={styles.mobileNavLink}
                activeClassName={styles.active}
              >
                services
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/works"
                className={styles.mobileNavLink}
                activeClassName={styles.active}
              >
                our works
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/events"
                className={styles.mobileNavLink}
                activeClassName={styles.active}
              >
                events
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/about"
                className={styles.mobileNavLink}
                activeClassName={styles.active}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contact"
                className={styles.mobileNavLink}
                activeClassName={styles.active}
              >
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

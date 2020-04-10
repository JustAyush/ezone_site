import React, { Component } from "react";

import styles from "../scss/team.module.scss";

class Team extends Component {
  render() {
    return (
      <div className={styles.teamOuter}>
        <div className={styles.teamInner}>
          <div className={styles.ourTeam}>Our Team</div>
          {/* Directors */}
          {this.props.team.directors.length > 0 ? (
            <React.Fragment>
              <div className={styles.teamCategory}>Directors</div>
              <ul>
                <Grid team={this.props.team.directors} />
              </ul>
              <div className={styles.dividerHalf}></div>
            </React.Fragment>
          ) : null}
          {/* Managers */}
          {this.props.team.managers.length > 0 ? (
            <React.Fragment>
              <div className={styles.teamCategory}>Managers</div>
              <ul>
                <Grid team={this.props.team.managers} />
              </ul>
              <div className={styles.dividerHalf}></div>
            </React.Fragment>
          ) : null}
          {/* Full Time Staffs */}
          {this.props.team.fullTimers.length > 0 ? (
            <React.Fragment>
              <div className={styles.teamCategory}>Full Time Staffs</div>
              <ul>
                <Grid team={this.props.team.fullTimers} />
              </ul>
              <div className={styles.dividerHalf}></div>
            </React.Fragment>
          ) : null}
          {/* Part Time Staffs */}
          {this.props.team.partTimers.length > 0 ? (
            <React.Fragment>
              <div className={styles.teamCategory}>Part Time Staffs</div>
              <ul>
                <Grid team={this.props.team.partTimers} />
              </ul>
              <div className={styles.dividerHalf}></div>
            </React.Fragment>
          ) : null}
        </div>
      </div>
    );
  }
}

class Grid extends Component {
  render() {
    const team = this.props.team.map((item, index) => (
      <li key={index}>
        <div className={styles.gridElement}>
          <div
            className={styles.photoWrapper}
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className={styles.teamInfoWrapper}>
            <div className={styles.team}>
              <div className={styles.name}>{item.name}</div>
              <div className={styles.post}>{item.title}</div>
            </div>
          </div>
        </div>
      </li>
    ));
    return <React.Fragment>{team}</React.Fragment>;
  }
}

export default Team;

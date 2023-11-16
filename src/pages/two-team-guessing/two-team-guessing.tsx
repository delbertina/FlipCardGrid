import "./two-team-guessing.scss";
import React from "react";
import { Button, IconButton, Toolbar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { GridItem } from "../../types/grid-item";
import {
  TwoTeamGuessingGridItems,
  TwoTeamGuessingTeams,
} from "./two-team-guessing-data";
import GridButton from "../../components/grid-button/grid-button";

interface TwoTeamGuessingPageProps {}

interface TwoTeamGuessingPageState {
  gridItems: GridItem[][];
  redScore: number;
  blueScore: number;
  redSelected: number;
  blueSelected: number;
  selecting?: TwoTeamGuessingTeams;
}

class TwoTeamGuessing extends React.Component<
  TwoTeamGuessingPageProps,
  TwoTeamGuessingPageState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      gridItems: TwoTeamGuessingGridItems,
      redScore: 0,
      blueScore: 0,
      redSelected: 0,
      blueSelected: 0,
      selecting: undefined,
    };
  }

  private getGridItemClasses(order: number): string {
    const baseClass =
      "two-team-guessing-grid-row-item " +
      (this.state.selecting
        ? "two-team-guessing-grid-row-item-selecting "
        : "");
    if (this.state.redSelected === order && this.state.blueSelected === order) {
      return baseClass + "two-team-guessing-grid-item-selected-both";
    }
    if (this.state.redSelected === order) {
      return baseClass + "two-team-guessing-grid-item-selected-red";
    }
    if (this.state.blueSelected === order) {
      return baseClass + "two-team-guessing-grid-item-selected-blue";
    }
    return baseClass + "two-team-guessing-grid-item-unselected";
  }

  private toggleSelecting(team?: TwoTeamGuessingTeams): void {
    this.setState({
      selecting: this.state.selecting ? undefined : team ?? undefined,
    });
  }

  private handleGridButtonClick(order: number): void {
    if (this.state.selecting) {
      this.toggleSelecting();
      if (this.state.selecting === TwoTeamGuessingTeams.RED) {
        if (this.state.redSelected === order) {
          this.setState({ redSelected: 0 });
        } else {
          this.setState({ redSelected: order });
        }
      } else {
        if (this.state.blueSelected === order) {
          this.setState({ blueSelected: 0 });
        } else {
          this.setState({ blueSelected: order });
        }
      }
    }
    // flip over card
  }

  private incrementRedScore(inc: number): void {
    const newValue = this.state.redScore + inc;
    this.setState({ redScore: newValue < 0 ? 0 : newValue });
  }

  private incrementBlueScore(inc: number): void {
    const newValue = this.state.blueScore + inc;
    this.setState({ blueScore: newValue < 0 ? 0 : newValue });
  }

  render() {
    return (
      <>
        <Toolbar className="two-team-guessing-toolbar">
          <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-left">
            <IconButton aria-label="" color="error" onClick={() => this.incrementRedScore(1)}>
              <AddIcon />
            </IconButton>
            <div className="two-team-guessing-toolbar-text-button">
              <Button
                color="error"
                onClick={() => this.toggleSelecting(TwoTeamGuessingTeams.RED)}
                variant={this.state.selecting ? "outlined" : "contained"}
              >
                <strong>{this.state.redScore}</strong>
              </Button>
            </div>
            <IconButton aria-label="" color="error" onClick={() => this.incrementRedScore(-1)}>
              <RemoveIcon />
            </IconButton>
          </div>
          <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-middle">
            <IconButton aria-label="settings" onClick={() => {}}>
              <SettingsIcon />
            </IconButton>
          </div>
          <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-right">
            <IconButton aria-label="" color="primary" onClick={() => this.incrementBlueScore(1)}>
              <AddIcon />
            </IconButton>
            <div className="two-team-guessing-toolbar-text-button">
              <Button
                color="primary"
                onClick={() => this.toggleSelecting(TwoTeamGuessingTeams.BLUE)}
                variant={this.state.selecting ? "outlined" : "contained"}
                className="two-team-guessing-toolbar-text-button"
              >
                <strong>{this.state.blueScore}</strong>
              </Button>
            </div>
            <IconButton aria-label="" color="primary" onClick={() => this.incrementBlueScore(-1)}>
              <RemoveIcon />
            </IconButton>
          </div>
        </Toolbar>
        <div className="two-team-guessing-grid">
          {this.state.gridItems.map((itemList, listIndex) => (
            <div className="two-team-guessing-grid-row" key={listIndex}>
              {itemList.map((item, itemIndex) => (
                <div
                  className={this.getGridItemClasses(item.order)}
                  key={itemIndex}
                >
                  <GridButton
                    buttonData={item}
                    buttonClicked={() => this.handleGridButtonClick(item.order)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default TwoTeamGuessing;

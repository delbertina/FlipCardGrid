import "./two-team-guessing.scss";
import React from "react";
import { Box, Button, IconButton, SwipeableDrawer, Toolbar, makeStyles } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { FlippableGridItem } from "../../types/grid-item";
import {
  TwoTeamGuessingGridItems,
  TwoTeamGuessingTeams,
} from "./two-team-guessing-data";
import FlippableGridButton from "../../components/flippable-grid-button/flippable-grid-button";
import { grey } from "@mui/material/colors";

interface TwoTeamGuessingPageProps {}

interface TwoTeamGuessingPageState {
  gridItems: FlippableGridItem[][];
  flippedItems: number[];
  redScore: number;
  blueScore: number;
  redSelected: number;
  blueSelected: number;
  selecting?: TwoTeamGuessingTeams;
  isSettingsOpen: boolean;
}

class TwoTeamGuessing extends React.Component<
  TwoTeamGuessingPageProps,
  TwoTeamGuessingPageState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      gridItems: TwoTeamGuessingGridItems,
      flippedItems: [],
      redScore: 0,
      blueScore: 0,
      redSelected: -1,
      blueSelected: -1,
      selecting: undefined,
      isSettingsOpen: false,
    };
  }

  private getGridItemClasses(index: number): string {
    const baseClass =
      "two-team-guessing-grid-row-item " +
      (this.state.selecting
        ? "two-team-guessing-grid-row-item-selecting "
        : "");
    if (this.state.redSelected === index && this.state.blueSelected === index) {
      return baseClass + "two-team-guessing-grid-item-selected-both";
    }
    if (this.state.redSelected === index) {
      return baseClass + "two-team-guessing-grid-item-selected-red";
    }
    if (this.state.blueSelected === index) {
      return baseClass + "two-team-guessing-grid-item-selected-blue";
    }
    return baseClass + "two-team-guessing-grid-item-unselected";
  }

  private getIsFlipped(index: number): boolean {
    return this.state.flippedItems.indexOf(index) > -1;
  }

  private toggleSelecting(team?: TwoTeamGuessingTeams): void {
    this.setState({
      selecting: this.state.selecting ? undefined : team ?? undefined,
    });
  }

  private handleGridButtonClick(index: number): void {
    if (this.state.selecting) {
      this.toggleSelecting();
      if (this.state.selecting === TwoTeamGuessingTeams.RED) {
        if (this.state.redSelected === index) {
          this.setState({ redSelected: -1 });
        } else {
          this.setState({ redSelected: index });
        }
      } else {
        if (this.state.blueSelected === index) {
          this.setState({ blueSelected: -1 });
        } else {
          this.setState({ blueSelected: index });
        }
      }
    } else {
      const isFlipped = this.state.flippedItems.indexOf(index);
      const newArray =
        isFlipped > -1
          ? [...this.state.flippedItems.filter((item) => item !== index)]
          : [...this.state.flippedItems, index];
      this.setState({ flippedItems: newArray });
    }
  }

  private incrementRedScore(inc: number): void {
    const newValue = this.state.redScore + inc;
    this.setState({ redScore: newValue < 0 ? 0 : newValue });
  }

  private incrementBlueScore(inc: number): void {
    const newValue = this.state.blueScore + inc;
    this.setState({ blueScore: newValue < 0 ? 0 : newValue });
  }

  private handleToggleSettings(): void {
    this.setState({ isSettingsOpen: !this.state.isSettingsOpen });
  }

  private handleResetBoard(): void {
    this.setState({
      redSelected: -1,
      blueSelected: -1,
      flippedItems: []
    });
    this.handleToggleSettings();
  }

  private handleToggleAllCards(): void {
    if (this.state.flippedItems.length) {
      this.setState({flippedItems: []});
    } else {
      this.setState({ flippedItems: Array.from(Array(15).keys())})
    }
    this.handleToggleSettings();
  }

  private handleTotalReset(): void {
    console.log('So you accidentally reset the whole game ...');
    console.log("Here's the game state before you did that, you're welcome!");
    console.log("Red Score: ", this.state.redScore, " :: Blue Score: ", this.state.blueScore);
    this.setState({
      redSelected: -1,
      blueSelected: -1,
      redScore: 0,
      blueScore: 0,
      flippedItems: []
    });
    this.handleToggleSettings();
  }

  render() {
    return (
      <div className="two-team-guessing">
        <SwipeableDrawer
          anchor={"top"}
          open={this.state.isSettingsOpen}
          onClose={() => this.handleToggleSettings()}
          onOpen={() => this.handleToggleSettings()}
        >
          <Box
            sx={{
              backgroundColor: grey[800],
              padding: 2,
              color: "white",
              textAlign: "center",
            }}
          >
            <div>
              <IconButton
                aria-label="close"
                color="warning"
                onClick={() => this.handleToggleSettings()}
              >
                <ClearIcon />
              </IconButton>
            </div>
            <h4 className="two-team-guessing-settings-title">Super Secret Settings</h4>
            <div className="two-team-guessing-settings-button-container">
              <Button
                variant="contained"
                color="info"
                onClick={() => this.handleResetBoard()}
              >
                Reset Board
              </Button>
              <Button
                variant="contained"
                color="info"
                onClick={() => this.handleToggleAllCards()}
              >
                Toggle All Cards
              </Button>
              <Button
                variant="contained"
                color="info"
                onClick={() => this.handleTotalReset()}
              >
                Total Reset
              </Button>
            </div>
          </Box>
        </SwipeableDrawer>
        <Toolbar className="two-team-guessing-toolbar">
          <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-left">
            <IconButton
              aria-label=""
              color="error"
              onClick={() => this.incrementRedScore(1)}
            >
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
            <IconButton
              aria-label=""
              color="error"
              onClick={() => this.incrementRedScore(-1)}
            >
              <RemoveIcon />
            </IconButton>
          </div>
          <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-middle">
            <IconButton aria-label="settings" onClick={() => this.handleToggleSettings()}>
              <SettingsIcon />
            </IconButton>
          </div>
          <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-right">
            <IconButton
              aria-label=""
              color="primary"
              onClick={() => this.incrementBlueScore(1)}
            >
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
            <IconButton
              aria-label=""
              color="primary"
              onClick={() => this.incrementBlueScore(-1)}
            >
              <RemoveIcon />
            </IconButton>
          </div>
        </Toolbar>
        <div className="two-team-guessing-grid">
          {this.state.gridItems.map((itemList, listIndex) => (
            <div className="two-team-guessing-grid-row" key={listIndex}>
              {itemList.map((item, itemIndex) => (
                <div
                  className={this.getGridItemClasses(itemIndex + listIndex * 5)}
                  key={itemIndex}
                >
                  <FlippableGridButton
                    isButtonFlipped={this.getIsFlipped(
                      itemIndex + listIndex * 5
                    )}
                    frontButtonData={item.front}
                    backButtonData={item.back}
                    buttonClicked={() =>
                      this.handleGridButtonClick(itemIndex + listIndex * 5)
                    }
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TwoTeamGuessing;

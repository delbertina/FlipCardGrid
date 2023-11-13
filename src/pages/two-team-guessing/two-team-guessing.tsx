import "./two-team-guessing.scss";
import React from "react";
import { Button, IconButton, Toolbar } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { GridItem } from "../../types/grid-item";
import { TwoTeamGuessingGridItems } from "./two-team-guessing-data";

interface TwoTeamGuessingPageProps {}

interface TwoTeamGuessingPageState {
  gridItems: GridItem[][];
}

class TwoTeamGuessing extends React.Component<
  TwoTeamGuessingPageProps,
  TwoTeamGuessingPageState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      gridItems: TwoTeamGuessingGridItems,
    };
  }

  render() {
    return (
      <>
        {/* <AppBar position="fixed"> */}
          <Toolbar className="two-team-guessing-toolbar">
            <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-left">
              <IconButton aria-label="" color="warning" onClick={() => {}}>
                <AddIcon />
              </IconButton>
              <Button color="warning" onClick={() => {}}>
                0
              </Button>
              <IconButton aria-label="" color="warning" onClick={() => {}}>
                <RemoveIcon />
              </IconButton>
            </div>
            <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-middle">
              <IconButton
                aria-label="settings"
                color="warning"
                onClick={() => {}}
              >
                <SettingsIcon />
              </IconButton>
            </div>
            <div className="two-team-guessing-toolbar-group two-team-guessing-toolbar-group-right">
              <IconButton aria-label="" color="warning" onClick={() => {}}>
                <AddIcon />
              </IconButton>
              <Button color="warning" onClick={() => {}}>
                0
              </Button>
              <IconButton aria-label="" color="warning" onClick={() => {}}>
                <RemoveIcon />
              </IconButton>
            </div>
          </Toolbar>
        {/* </AppBar> */}
        <div className="two-team-guessing-grid">
        {this.state.gridItems.map((itemList, listIndex) => (
          <div className="two-team-guessing-grid-row" key={listIndex}>
            {itemList.map((item, itemIndex) => (
              <div className="two-team-guessing-grid-row-item" key={itemIndex}>{item.order} {item.title}</div>
            ))}
          </div>
        ))}
        </div>
      </>
    );
  }
}

export default TwoTeamGuessing;

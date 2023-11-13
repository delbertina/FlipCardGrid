import "./grid-button.scss";
import { Button } from "@mui/material";
import React from "react";
import { GridItem } from "../../types/grid-item";

export interface GridButtonProps {
  buttonData: GridItem,
  buttonClicked: () => void;
}

function GridButton(props: GridButtonProps) {
  return (
    <Button
      variant="contained"
      onClick={() => props.buttonClicked()}
      className="action-button"
      color={"info"}
    >
      {props.buttonData.title}
    </Button>
  );
}

export default GridButton;
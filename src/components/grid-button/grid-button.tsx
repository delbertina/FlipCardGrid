import "./grid-button.scss";
import { Button } from "@mui/material";
import { GridItem } from "../../types/grid-item";

export interface GridButtonProps {
  buttonData: GridItem;
  buttonClicked: () => void;
}

function GridButton(props: GridButtonProps) {
  return (
    <div className="grid-button">
      <Button
        variant="contained"
        onClick={() => props.buttonClicked()}
        color="primary"
      >
        <strong>{props.buttonData.order}</strong>
        {props.buttonData.title}
      </Button>
    </div>
  );
}

export default GridButton;

import "./grid-button.scss";
import { Button } from "@mui/material";
import { GridItem, getImgAssetPath } from "../../types/grid-item";

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
        {!!props.buttonData.image_src && (
          <div className="grid-button-img">
            <img
              src={getImgAssetPath(props.buttonData.image_src)}
              alt={props.buttonData.title}
            />
          </div>
        )}
        <div className="grid-button-title">{props.buttonData.title}</div>
        <div className="grid-button-subtitle">{props.buttonData.subtitle}</div>
      </Button>
    </div>
  );
}

export default GridButton;

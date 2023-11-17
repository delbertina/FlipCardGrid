import "./flippable-grid-button.scss";
import { GridItem } from "../../types/grid-item";
import GridButton from "../grid-button/grid-button";
import {CSSTransition} from 'react-transition-group';
import { useEffect, useRef, useState } from "react";

export interface FlippableGridButtonProps {
  frontButtonData: GridItem;
  backButtonData: GridItem;
  isButtonFlipped: boolean;
  buttonClicked: () => void;
}

function FlippableGridButton(props: FlippableGridButtonProps) {

  const [isFlipped, setIsFlipped] = useState(props.isButtonFlipped);
  const ref = useRef(null);

  useEffect(() => {
    setIsFlipped((current) => !current);
  }, [props.isButtonFlipped])

  return (
    <div className="flippable-grid-button-wrapper">
      <CSSTransition in={isFlipped} timeout={1000} classNames="flippable-grid-button-transition-flip" nodeRef={ref}>
      <div className="flippable-grid-button" ref={ref}>
        <div className="flippable-grid-button-front">
          <GridButton
            buttonData={props.frontButtonData}
            buttonClicked={() => props.buttonClicked()}
          />
        </div>
        <div className="flippable-grid-button-back">
          <GridButton
            buttonData={props.backButtonData}
            buttonClicked={() => props.buttonClicked()}
          />
        </div>
      </div>
      </CSSTransition>
    </div>
  );
}

export default FlippableGridButton;

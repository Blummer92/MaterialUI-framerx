import * as React from "react";
import * as System from "@material-ui/core";
import { ControlType, PropertyControls, addPropertyControls } from "framer";

const style: React.CSSProperties = {
  width: "100%",
  height: "100%"
};

export const StepConnector: React.SFC = props => {
  return <System.StepConnector {...props} style={style} />;
};

StepConnector.defaultProps = {
  width: 150,
  height: 50
};

addPropertyControls(StepConnector, {
  active: { title: "Active", type: ControlType.Boolean },
  alternativeLabel: { title: "AlternativeLabel", type: ControlType.Boolean },
  completed: { title: "Completed", type: ControlType.Boolean },
  disabled: { title: "Disabled", type: ControlType.Boolean },
  index: { title: "Index", type: ControlType.Number },
  orientation: {
    title: "Orientation",
    options: ["horizontal", "vertical"],
    optionTitles: ["Horizontal", "Vertical"],
    type: ControlType.Enum
  }
});

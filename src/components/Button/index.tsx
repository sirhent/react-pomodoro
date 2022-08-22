import { Play, StopCircle } from "phosphor-react";
import { ButtonDefault, ButtonStop } from "./styles";

interface ButtonProps {
  text: string;
  variant: "primary" | "stop";
  icon?: "Play" | "StopCircle";
  type: "button" | "reset" | "submit";
  title: string;
  disabled?: boolean;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  function renderIcon() {
    switch (props.icon) {
      case "Play":
        return (
          <Play weight="fill" size={20} />
        );
      case "StopCircle":
        return (
          <StopCircle weight="fill" size={20} />
        );

      default:
        return;
    }
  }

  function renderButtonVariant() {
    const buttonProps = {
      disabled: props.disabled ? props.disabled : false,
      type: props.type,
      title: props.title,
      onClick: props.onClick
    }

    switch (props.variant) {
      case "stop":
        return (
          <ButtonStop 
            {...buttonProps}
          >
            {props.icon && renderIcon()}
            {props.text}
          </ButtonStop>
        );

      default:
        return (
          <ButtonDefault 
            {...buttonProps}
          >
            {props.icon && renderIcon()}
            {props.text}
          </ButtonDefault>
        );
    }
  }

  return renderButtonVariant();
}

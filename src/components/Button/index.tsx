import { Play } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  text: string;
  variant: "primary" | "stop";
}

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer>
      <Play weight="fill" size={20} />
      {props.text}
    </ButtonContainer>
  );
}

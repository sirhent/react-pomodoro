import { ButtonContainer, ButtonVariantColors } from "./Button.styles";

interface ButtonProps {
  color: ButtonVariantColors;
}

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer variant={props.color}>
      Enviar!
    </ButtonContainer>
  );
}

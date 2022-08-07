import styled, { css } from "styled-components";

export type ButtonVariantColors = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariantColors;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green"
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 8px;

  background-color: ${(props) => props.theme.brand_primary};
  color: ${(props) => props.theme.button_text_color};
`;

/* ${props => { */
/*   return css`background-color: ${buttonVariants[props.variant]}`; */
/* }} */

import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  padding: 1.4rem 4rem;
  border: none;
  border-radius: 12px;

  background-color: ${(props) => props.theme.brand_primary_80};

  box-shadow: ${(props) => props.theme.primary_button_neumorphic_fx};

  color: ${(props) => props.theme.button_text_color};
  font-size: 1.6rem;
  text-transform: uppercase;

  cursor: pointer;

  transition:
    background-color 200ms ease,
    box-shadow 200ms ease;

  &:hover {
    background-color: ${(props) => props.theme.brand_primary};
    box-shadow: ${(props) => props.theme.primary_button_neumorphic_fx_bright};
  }
`;

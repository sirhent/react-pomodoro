import styled from "styled-components";

export const ButtonBase = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  padding: 1.4rem 4rem;
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

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: ${(props) => props.theme.brand_primary_light};
    box-shadow: ${(props) => props.theme.primary_button_neumorphic_fx_bright};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ButtonDefault = styled(ButtonBase)`
  border: none;
  font-family: inherit;
`;

export const ButtonStop = styled(ButtonBase)`
  border: none;
  font-family: inherit;

  background-color: ${(props) => props.theme.stop_button_bg};
  box-shadow: ${(props) => props.theme.stop_button_neumorhic_fx};

  &:not(:disabled):hover,
  &:not(:disabled):focus {
    background-color: ${(props) => props.theme.stop_button_bg_bright};
    box-shadow: ${(props) => props.theme.stop_button_neumorhic_fx_bright};
  }
`;

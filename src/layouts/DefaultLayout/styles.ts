import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 112rem;
  min-height: 74rem;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem;

  border-radius: ${props => props.theme.border_radius_big};

  background: ${props => props.theme.default_background};
  box-shadow: ${props => props.theme.default_neumorphic_fx};
`;

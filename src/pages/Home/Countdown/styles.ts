import styled from "styled-components";

// Countdown
export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const CountdownNumber = styled.span`
  height: 19.8rem;
  width: 12.8rem;
  paddingg-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.counter_bg_color};
  border-radius: 12px;

  font-family: "Roboto Mono", sans-serif;
  font-size: 16rem;
  font-weight: 100;
  color: ${(props) => props.theme.counter_text_color};
  line-height: 1;

  pointer-events: none;
  user-select: none;
`;

export const CountdownDots = styled.span`
  width: 8rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;

  font-family: "Roboto Mono", sans-serif;
  font-size: 16rem;
  font-weight: 700;
  color: ${(props) => props.theme.brand_primary};

  pointer-events: none;
  user-select: none;
`;

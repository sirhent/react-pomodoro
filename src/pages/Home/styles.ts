import styled from "styled-components";

export const HomeContainer = styled.main`
  margin-top: 6.8rem;
`;


// Form
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.8rem;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const FormLabel = styled.label`
  color: ${(props) => props.theme.title_color};
  font-size: 1.8rem;
`;

export const FormInput = styled.input`
  padding: 1rem;
  width: min-content;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.placeholder_underline_color};

  &::placeholder {
    color: ${(props) => props.theme.placeholder_text_color};
    font-size: 1.8rem;
  }

  &:focus,
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.placeholder_underline_color_bright}
  }
`;

export const FormSpan = styled.span`
  font-size: 1.8rem;
`;


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
`;

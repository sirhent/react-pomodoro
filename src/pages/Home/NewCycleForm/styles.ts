import styled from "styled-components";

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const FormLabel = styled.label`
  color: ${(props) => props.theme.title_color};
  font-size: 1.8rem;
`;

export const BaseInput = styled.input`
  padding: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.placeholder_underline_color};

  font-family: inherit;
  font-weight: 400;
  font-size: 1.8rem;
  color: ${(props) => props.theme.title_color};

  transition: border-bottom 200ms ease;

  &::placeholder {
    color: ${(props) => props.theme.placeholder_text_color};
    font-size: 1.8rem;
  }

  &:focus,
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.brand_primary_light};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesInput = styled(TaskInput)`
  max-width: 7.2rem;
`;

export const FormSpan = styled.span`
  font-size: 1.8rem;
`;

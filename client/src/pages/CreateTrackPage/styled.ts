import styled from "styled-components";
import { theme } from "../../theme";

export const ScCreateTrackPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;

  input {
    border: none;
    background-color: ${theme.text};
    padding: 8px 16px;
    border-radius: 8px;
    outline: none;
  }

  button {
    background-color: ${theme.primary};
    border: none;
    color: ${theme.text};
    border-radius: 8px;
    padding: 8px 16px 6px;
    min-width: 80px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

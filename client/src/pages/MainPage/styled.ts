import styled from "styled-components";
import { theme } from "../../theme";

export const ScTitle = styled.div`
  font-size: 24px;
  margin-bottom: 32px;
`;

export const ScSearch = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

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
    max-width: 200px;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

import styled from "styled-components";
import { theme } from "../../theme";

export const ScPlayer = styled.div`
  height: 60px;
  gap: 24px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 24px;
  background-color: ${theme.secondary};
  color: ${theme.text};
  .progress {
    display: flex;
    gap: 8px;
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

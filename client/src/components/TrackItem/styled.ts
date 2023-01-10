import styled from "styled-components";
import { theme } from "../../theme";

export const ScTrackItem = styled.div`
  width: 100%;
  background-color: ${theme.text};
  border-radius: 12px;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 8px 16px;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  button {
    background-color: ${theme.primary};
    border: none;
    color: ${theme.text};
    border-radius: 8px;
    padding: 8px 16px 6px;
    min-width: 40px;
    max-width: 120px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

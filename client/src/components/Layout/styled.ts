import styled from "styled-components";
import { theme } from "../../theme";

export const ScLayout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  color: ${theme.textDark};
`;

export const ScHeader = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  column-gap: 20px;
  padding: 24px 32px;
  background-color: ${theme.primary};

  .header-item,
  a {
    text-decoration: none;
    color: ${theme.text};
    background-color: ${theme.primary};
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const ScContainer = styled.div`
  padding: 20px 40px;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;

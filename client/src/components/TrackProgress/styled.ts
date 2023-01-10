import styled from "styled-components";
import { theme } from "../../theme";

export const ScRangeInput = styled.div`
  display: flex;
  gap: 8px;

  input[type="range"] {
    overflow: hidden;
    width: 80px;
    margin-top: 4px;
    max-height: 10px;
    -webkit-appearance: none;
    background-color: ${theme.text};
  }

  input[type="range"]::-webkit-slider-runnable-track {
    max-height: 10px;
    height: 100%;
    -webkit-appearance: none;
    color: ${theme.primary};
    margin-top: -1px;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 10px;
    max-height: 10px;
    -webkit-appearance: none;
    height: 100%;
    cursor: ew-resize;
    background: #434343;
    box-shadow: -80px 0 0 80px ${theme.primary};
  }
`;

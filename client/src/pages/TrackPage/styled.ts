import styled from "styled-components";
import { theme } from "../../theme";

export const ScTrackPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const ScTrackBlock = styled.div`
  display: flex;
  gap: 32px;

  & > .info {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & > .title {
      font-weight: 700;
      font-size: 32px;
      text-transform: uppercase;
    }

    & > .artist {
      font-weight: 700;
      font-size: 24px;
    }
  }

  & > img {
    width: 150px;
    height: 150px;
    border-radius: 51%;
  }
`;

export const ScCommentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 120px;

  & > .comment {
    background-color: ${theme.text};
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    .username {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

export const ScCommentForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 16px;
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

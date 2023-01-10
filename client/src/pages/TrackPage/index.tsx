import React from "react";
import { useLocation } from "react-router-dom";
import {
  ScCommentForm,
  ScCommentsBlock,
  ScTrackBlock,
  ScTrackPage,
} from "./styled";
import axios from "axios";
import { ITrack } from "../../types/track";
import { ScTitle } from "../MainPage/styled";
import { useInput } from "../../hooks/useInput";

export default function TrackPage() {
  const location = useLocation();
  const [track, setTrack] = React.useState<null | ITrack>(null);
  const commentUsername = useInput("");
  const commentText = useInput("");

  const fetchTrack = React.useCallback(async (): Promise<ITrack> => {
    const response = await axios.get(
      `http://localhost:3001/tracks/${location.state.id}`
    );
    return response.data;
  }, [location.state.id]);

  React.useEffect(() => {
    fetchTrack().then((data) => setTrack(data));
  }, [fetchTrack, location.state.id]);

  const addComment = async () => {
    try {
      await axios.post(`http://localhost:3001/tracks/comment`, {
        username: commentUsername.value,
        text: commentText.value,
        trackId: track?._id,
      });
      await fetchTrack().then((data) => setTrack(data));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScTrackPage>
      <ScTrackBlock>
        <img src={`http://localhost:3001/${track?.picture}`} alt="" />

        <div className="info">
          <div className="title">{track?.name}</div>
          <div className="artist">{track?.artist}</div>
          <div>{track?.text}</div>
        </div>
      </ScTrackBlock>
      <ScCommentsBlock>
        <ScCommentForm>
          <input placeholder="username" {...commentUsername} />
          <input placeholder="type comment here" {...commentText} />
          <button onClick={addComment}>comment</button>
        </ScCommentForm>
        <ScTitle>Comments</ScTitle>
        {track?.comments.map((comment) => (
          <div className="comment" key={comment._id}>
            <div className="username">{comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </ScCommentsBlock>
    </ScTrackPage>
  );
}

import React, { FC } from "react";
import { RootState } from "../../store";
import { playTrack, setActive } from "../../store/slices/playerSlice";
import { ITrack } from "../../types/track";
import { useSelector, useDispatch } from "react-redux";
import { ScTrackItem } from "./styled";
import { useNavigate } from "react-router-dom";

interface TrackItemProps {
  track: ITrack;
}

export const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const { active } = useSelector((state: RootState) => state.player);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const play = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (track._id !== active?._id) {
      dispatch(setActive(track));
      playTrack();
    }
  };

  return (
    <ScTrackItem
      onClick={() =>
        navigate(`tracks/${track._id}`, {
          state: { id: track._id },
        })
      }
    >
      <button onClick={play}>open player</button>
      <div>{track.name}</div>
      <div>{track.artist}</div>
      <img src={`http://localhost:3001/${track.picture}`} alt={track.picture} />
    </ScTrackItem>
  );
};

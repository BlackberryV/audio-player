import React, { FC } from "react";
import { ITrack } from "../../types/track";
import { TrackItem } from "../TrackItem";
import { ScTracks } from "./styled";

interface TracksProps {
  tracks: ITrack[];
}

export const Tracks: FC<TracksProps> = ({ tracks }) => {
  return (
    <ScTracks>
      {tracks.map((track) => (
        <TrackItem track={track} key={track._id} />
      ))}
    </ScTracks>
  );
};

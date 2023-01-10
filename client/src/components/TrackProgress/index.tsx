import React, { FC } from "react";
import { ScRangeInput } from "./styled";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TrackProgress: FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <ScRangeInput>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </ScRangeInput>
  );
};

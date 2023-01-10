import React, { useEffect } from "react";
import { TrackProgress } from "../TrackProgress";
import { useSelector, useDispatch } from "react-redux";
import { ScPlayer } from "./styled";
import { RootState } from "../../store";
import {
  playTrack,
  pauseTrack,
  setVolume,
  setCurrentTime,
  setDuration,
} from "../../store/slices/playerSlice";

let audio = new Audio();

export default function Player() {
  const { pause, volume, active, duration, currentTime } = useSelector(
    (state: RootState) => state.player
  );
  const dispatch = useDispatch();

  const setAudio = React.useCallback(() => {
    if (active) {
      audio.src = "http://localhost:3001/" + active.audio;
      audio.volume = 50 / 100;
      audio.onloadedmetadata = () => {
        dispatch(setDuration(Math.ceil(audio.duration)));
      };
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(Math.ceil(audio.currentTime)));
      };
      console.log(audio);
    }
  }, [active, dispatch]);

  const onPlay = () => {
    if (pause) {
      dispatch(playTrack());
      audio.play();
    } else {
      dispatch(pauseTrack());
      audio.pause();
    }
  };

  useEffect(() => {
    setAudio();
  }, [dispatch, setAudio]);

  useEffect(() => {
    onPlay();
    // eslint-disable-next-line
  }, [setAudio]);

  const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    dispatch(setVolume(Number(e.target.value)));
  };

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    dispatch(setCurrentTime(Number(e.target.value)));
  };

  if (!active) return null;

  return (
    <ScPlayer>
      <div>{active?.name}</div>
      <div>{active?.artist}</div>
      <div onClick={onPlay}>
        {pause ? <button>play</button> : <button>stop</button>}
      </div>

      <div className="progress">
        <div>progress</div>
        <TrackProgress
          right={duration}
          left={currentTime}
          onChange={onChangeCurrentTime}
        />
      </div>

      <div className="progress">
        <div>volume</div>
        <TrackProgress left={volume} right={100} onChange={onChangeVolume} />
      </div>
    </ScPlayer>
  );
}

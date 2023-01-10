import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Tracks } from "../../components/Tracks";
import { AppDispatch, RootState } from "../../store";
import { fetchTracks, searchTracks } from "../../store/slices/trackSlice";
import { ScSearch, ScTitle } from "./styled";

export default function MainPage() {
  const { tracks, error } = useSelector((state: RootState) => state.track);
  const dispatch = useDispatch<AppDispatch>();
  const [timer, setTimer] = React.useState<null | NodeJS.Timeout>(null);

  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        dispatch(searchTracks(e.target.value));
      }, 500)
    );
  };

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ScTitle>Main Page</ScTitle>
      <ScSearch>
        <div className="div">Search</div>
        <input placeholder="enter track name" onChange={search} />
      </ScSearch>
      <Tracks tracks={tracks} />
    </div>
  );
}

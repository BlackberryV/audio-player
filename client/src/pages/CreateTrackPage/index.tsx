import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "../../components/FileUploader";
import { useInput } from "../../hooks/useInput";
import { ScCreateTrackPage } from "./styled";
import axios from "axios";
import { ScTitle } from "../MainPage/styled";

export default function CreateTrackPage() {
  const [picture, setPicture] = useState<Blob | null>(null);
  const [audio, setAudio] = useState<Blob | null>(null);
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const formData = () => {
    if (
      audio !== null &&
      picture !== null &&
      name.value &&
      artist.value &&
      text.value
    ) {
      setError(false);
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("text", text.value);
      formData.append("artist", artist.value);
      formData.append("picture", picture);
      formData.append("audio", audio);
      axios
        .post("http://localhost:3001/tracks", formData)
        .then((resp) => navigate("/"))
        .catch((e) => console.log(e));
    } else {
      setError(true);
    }
  };

  return (
    <ScCreateTrackPage>
      <ScTitle>Add a new track</ScTitle>
      <input {...name} placeholder={"name"} />
      <input {...artist} placeholder={"artist"} />
      <input {...text} placeholder={"lyrics"} />

      <FileUploader setFile={setPicture} accept="image/*">
        <button>upload image</button>
      </FileUploader>
      {picture !== null && <div>picture is uploaded</div>}
      <FileUploader setFile={setAudio} accept="audio/*">
        <button>upload audio</button>
      </FileUploader>
      {audio !== null && <div>audio is uploaded</div>}
      {error && <div>all fields are required</div>}
      <button onClick={formData}>create</button>
    </ScCreateTrackPage>
  );
}

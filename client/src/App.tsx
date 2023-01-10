import React from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NouFoundPage";
import CreateTrackPage from "./pages/CreateTrackPage";
import TrackPage from "./pages/TrackPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/tracks/:id"} element={<TrackPage />} />
          <Route path={"/create"} element={<CreateTrackPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

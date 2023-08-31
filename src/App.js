import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Album from "./components/album/Album";
import Albums from "./components/albums/Albums";
import Post from "./components/post/Post";
import Country from "./components/country/Country";
import PhotosBox from "./components/photos/PhotosBox";

function App() {
  return (
    <div className="App">
      {
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Album" element={<Album />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Country" element={<Country />} />
          <Route path="/PhotoBox" element={<PhotosBox />} />
        </Routes>
      }
    </div>
  );
}

export default App;

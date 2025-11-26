import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Welcome from "./pages/Welcome.jsx";
import Auth from "./pages/Auth.jsx";
import Quiz from "./pages/Quiz.jsx";
import Compatibility from "./pages/Compatibility.jsx";
import Home from "./pages/Home.jsx";
import PetProfile from "./pages/PetProfile.jsx";
import Chat from "./pages/Chat.jsx";
import Favorites from "./pages/Favorites.jsx";
import Tips from "./pages/Tips.jsx";
import Story from "./pages/Story.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pets/:id" element={<PetProfile />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/story" element={<Story />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
};

export default App;

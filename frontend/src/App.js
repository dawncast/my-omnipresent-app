import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import ProfilesPage from "./pages/ProfilesPage";
import NorthVanHikingPage from "./pages/NorthVanHikingPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/profiles" element={<ProfilesPage />}></Route>
          <Route path="/your-communities/northvanhiking" element={<NorthVanHikingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
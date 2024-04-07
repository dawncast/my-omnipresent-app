import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import ProfilesPage from "./pages/ProfilesPage";
<<<<<<< HEAD
import NorthVanHikingPage from "./pages/NorthVanHikingPage";
=======
import FriendsPage from "./pages/FriendsPage";
>>>>>>> 40d17e23720a591a1eaa104eeb52dd6a8b062993


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/profiles" element={<ProfilesPage />}></Route>
<<<<<<< HEAD
          <Route path="/your-communities/northvanhiking" element={<NorthVanHikingPage />}></Route>
=======
          <Route path="/friends" element={<FriendsPage />}></Route>
>>>>>>> 40d17e23720a591a1eaa104eeb52dd6a8b062993
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
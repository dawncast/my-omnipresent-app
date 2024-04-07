import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import ProfilesPage from "./pages/ProfilesPage";
import FriendsPage from "./pages/FriendsPage";
import EventsPage from "./pages/EventsPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/profiles" element={<ProfilesPage />}></Route>
          <Route path="/friends" element={<FriendsPage />}></Route>
          <Route path="/event-details" element={<EventsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
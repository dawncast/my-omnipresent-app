import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import NorthVanHikingPage from "./pages/NorthVanHikingPage";
import FriendsPage from "./pages/FriendsPage";
import CalendarPage from "./pages/CalendarPage";
import EventsPage from "./pages/EventsPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommunityPage />}></Route>
          <Route path="/your-communities/northvanhiking" element={<NorthVanHikingPage />}></Route>
          <Route path="/friends" element={<FriendsPage />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/event-details" element={<EventsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
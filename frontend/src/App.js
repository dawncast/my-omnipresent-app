import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import FriendsPage from "./pages/FriendsPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>
          <Route path="/friends" element={<FriendsPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
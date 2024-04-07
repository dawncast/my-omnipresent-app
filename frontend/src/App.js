import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/community" element={<CommunityPage />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
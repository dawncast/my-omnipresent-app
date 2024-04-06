import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './index.css';
import Community from './pages/CommunityPage';



function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<HomePage />} /> 
      <Route path="/community" element={<Community />} /> 
    </Routes>
  </Router>
  );
}

export default App;

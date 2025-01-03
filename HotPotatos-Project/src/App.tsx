import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";
import SubjectSearch from "./components/SubjectSearch";
import First from "./pages/First";
import FindInfo from "./pages/FindInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/First" element={<First />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FindInfo" element={<FindInfo />} />
        {/* 홈페이지 경로 */}
        <Route path="/Homepage" element={<Homepage />} />
        {/* 채팅 페이지 경로 */}
        <Route path="/ChatPage" element={<ChatPage />} />
        <Route path="/SubjectSearch" element={<SubjectSearch />} />
      </Routes>
    </Router>
  );
}

export default App;

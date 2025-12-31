import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import MyPlayList from "./pages/MyPlayList.jsx";
export default function App() {
  return (
    <div>
      {/* Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/myplaylist" element={<MyPlayList/>}/>
      </Routes>
      {/* Footer */}
    </div>
  );
}

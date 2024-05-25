import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Integral from "./pages/Integral";
import Turunan from "./pages/Turunan";
import Limit from "./pages/Limit";
import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Integral />} />
          <Route path="/integral" element={<Integral />} />
          <Route path="/turunan" element={<Turunan />} />
          <Route path="/limit" element={<Limit />} />
        </Routes>
      </Router>
    </div>
  );
}

import "./styles.css";
import Menu from "./Menu/Menu";
import { Routes, Route } from "react-router-dom";
import Precall from "./Pages/Precall";
import Home from "./Pages/Home";
import { useNavigate } from "react-router-dom";
import Aftercall from "./Pages/Aftercall";
import Call from "./Pages/Call";
import Email from "./Pages/Email";
import Transfer from "./Pages/Transfer";
import Utm from "./Pages/Utm";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export default function App() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="App">
      <h1 onClick={() => handleClick("/")}><AccessibilityIcon /> M&A-KR <AccessibilityNewIcon /> </h1>
      <Menu />
      <Routes>
        <Route path="/mna" element={<Home />} />
        <Route path="/precall" element={<Precall />} />
        <Route path="/call" element={<Call />} />
        <Route path="/aftercall" element={<Aftercall />} />
        <Route path="/email" element={<Email />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/utm" element={<Utm />} />
      </Routes>
    </div>
  );
}

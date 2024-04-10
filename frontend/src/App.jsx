
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./pages/Auth/auth";
import Home from "./pages/Home/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

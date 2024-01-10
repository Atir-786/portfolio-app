import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <BrowserRouter basename="/portfolio-app/">
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

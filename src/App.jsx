import { Routes, Route } from "react-router";

import Header from "./components/Header";
import Favorites from "./pages/Favorites.jsx";
import NotFound from "./pages/NotFound.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Film from "./pages/Film";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/film/:id" element={<Film />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

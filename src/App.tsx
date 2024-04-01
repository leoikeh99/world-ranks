import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Country from "@/pages/Country";
import Header from "@/components/Header";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<Country />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

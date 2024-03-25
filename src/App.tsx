import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Country from "@/pages/Country";
import Header from "@/components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:code" element={<Country />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

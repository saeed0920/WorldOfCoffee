import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/views/home/Home.tsx";
import Navigation from "@/Components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

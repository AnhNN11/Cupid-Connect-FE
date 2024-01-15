import { Landingpage } from "./pages/landingpage/landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path=""></Route>
        </Routes>
      </BrowserRouter>
      <Landingpage></Landingpage>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar></NavBar>}></Route>
        <Route path="/auth"></Route>
        <Route path="/checkout" />
        <Route path="/purchased-items" />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"></Route>
        <Route path="/auth"></Route>
        <Route path="/checkout" />
        <Route path="/purchased-items" />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ShopPage from "./pages/ShopPage";
import CheckoutPage from "./pages/CheckoutPage";
import PurchasedItemsPage from "./pages/PurchasedItemsPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<ShopPage />}></Route>
        <Route path="/purchased-items" element={<PurchasedItemsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

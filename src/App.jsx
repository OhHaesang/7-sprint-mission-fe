// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

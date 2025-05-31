import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

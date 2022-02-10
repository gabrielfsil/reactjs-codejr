import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CreateCategoryPage } from "../pages/Categories/create";

import { ProductsPages } from "../pages/Products";
import { CreateProductPage } from "../pages/Products/create";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsPages />} />
        <Route path="/categorias/cadastro" element={<CreateCategoryPage />} />
        <Route path="/produtos/cadastro" element={<CreateProductPage />} />
      </Routes>
    </Router>
  );
}

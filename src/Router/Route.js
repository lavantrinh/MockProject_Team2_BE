import { Route, Routes } from "react-router-dom";
import CartPage from "../Page/CartPage";
import Home from '../Page/Home';
import ProductDetail from '../Page/ProductDetail';


let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<CartPage />} />
    
    {/* <Route path="*" element={<Error />} /> */}
  </Routes>
);

export { routes };

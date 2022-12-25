import { Route, Routes } from "react-router-dom";
import Home from '../Page/Home';
import ProductDetail from '../Page/ProductDetail';


let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    {/* <Route path="*" element={<Error />} /> */}
  </Routes>
);

export { routes };

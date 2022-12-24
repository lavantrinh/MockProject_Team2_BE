import { Route, Routes } from "react-router-dom";
import Home from '../Page/Home';



let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
   
    {/* <Route path="*" element={<Error />} /> */}
  </Routes>
);

export { routes };

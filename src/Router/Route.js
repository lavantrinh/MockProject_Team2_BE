import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import ProductDetail from "../Page/ProductDetail";
import AdminSignIn from "../Page/AdminSignIn";
import SignIn from "../Page/SignIn";
import SignUp from "../Page/SignUp";
import ResetPassword from "../Page/ResetPassword";
import ErrorPage from "../Page/ErrorPage";


let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:id" element={<ProductDetail />} />

  
    {/* <Route path="*" element={<Error />} /> */}

    <Route path="/signin" element={<SignIn />} />
    <Route path="/admin/signin" element={<AdminSignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/resetPassword" element={<ResetPassword />} />
    <Route path="error" element={<ErrorPage />} />

  </Routes>
);

export { routes };

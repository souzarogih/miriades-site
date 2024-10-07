import { Route, Routes } from "react-router-dom";
import { Home } from "../core/modules/home/pages";
import { Pricing } from "../core/modules/pricing/pages";
import { Register } from "../core/modules/register/page";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
  };
  
  export default RoutesApp;
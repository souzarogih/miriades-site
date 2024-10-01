import { Route, Routes } from "react-router-dom";
import { Home } from "../core/modules/home/pages";

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
  };
  
  export default RoutesApp;
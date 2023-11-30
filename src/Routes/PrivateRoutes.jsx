import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/Login"></Navigate>;
};

export default PrivateRoutes;
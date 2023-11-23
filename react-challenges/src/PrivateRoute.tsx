import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode
}
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const storedUser: string | null = localStorage.getItem("user");
  const getUser  = storedUser ? JSON.parse(storedUser) : null;
  
  return getUser?.token ? children : <Navigate to='/auth'/>
}

export default PrivateRoute;

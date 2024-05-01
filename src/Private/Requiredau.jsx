import { Navigate } from 'react-router-dom';
export default function RequireAuth({ children }) {
  const currentUser = sessionStorage.getItem('teacherlogindata');

  return currentUser ? children : <Navigate to="/login" replace />;
}

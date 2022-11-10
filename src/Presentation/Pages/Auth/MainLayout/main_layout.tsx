import { Link, Outlet } from "react-router-dom";

const AuthMainLayout = () => {
  return (
    <div>
      <h2>Auth</h2>
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
};

export default AuthMainLayout;

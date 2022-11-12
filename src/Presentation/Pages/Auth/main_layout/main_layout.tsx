import "./main_layout.styles.scss";
import { Link, Outlet } from "react-router-dom";

const AuthMainLayout = () => {
  return (
    <section className="main-layout">
      <div className="auth-container">
        <div className="cover">
          <Link to="/">Home</Link>
        </div>
        
        <main>
          <Outlet />
        </main>
      </div>
    </section>
  );
};

export default AuthMainLayout;

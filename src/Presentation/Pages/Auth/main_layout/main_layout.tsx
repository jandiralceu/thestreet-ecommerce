import "./main_layout.styles.scss";
import { Link, Outlet } from "react-router-dom";
import { Card } from "@mui/material";
import { RouteName } from "../../../utils";

const AuthMainLayout = () => {
  return (
    <section className="main-layout">
      <Card className="auth-container">
        <div className="cover">
          <Link to={RouteName.home}>Home</Link>
        </div>
        
        <main>
          <Outlet />
        </main>
      </Card>
    </section>
  );
};

export default AuthMainLayout;

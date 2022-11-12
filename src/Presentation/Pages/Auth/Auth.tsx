import { Route, Routes } from "react-router-dom";

import SigninPage from "./signin/signin";
import SignupPage from "./register/register";
import AuthMainLayout from "./main_layout/main_layout";

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthMainLayout />}>
          <Route index element={<SigninPage />} />
          <Route path="login" element={<SigninPage />} />
          <Route path="register" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<SigninPage />} />
      </Routes>
    </div>
  );
};

export default Auth;

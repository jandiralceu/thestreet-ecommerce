import { Route, Routes } from "react-router-dom";

import SigninPage from "./signin/signin";
import SignupPage from "./signup/signup";
import AuthMainLayout from "./main_layout/main_layout";

const Auth = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthMainLayout />}>
          <Route index element={<SigninPage />} />
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<SigninPage />} />
      </Routes>
    </div>
  );
};

export default Auth;

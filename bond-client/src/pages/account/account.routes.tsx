import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { AccountLayout } from "./account.layout";
import { SignInPage } from "./sign-in/sign-in.page";
import { ForgotPasswordPage } from "./forgot-password/forgot-password.page";

export const AccountRoutes = () => {
  return (
    <Routes>
      <Route
        path="/account/sign-in"
        element={
          <AccountLayout>
            <SignInPage />
          </AccountLayout>
        }
      />
      <Route
        path="/account/forgot-password"
        element={
          <AccountLayout>
            <ForgotPasswordPage />
          </AccountLayout>
        }
      />
    </Routes>
  );
};

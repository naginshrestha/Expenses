import React from "react";
import { Layout } from "../Components/Layout";
import { PassResetForm } from "../Components/PassResetForm";

export const ForgetPassword = () => {
  return (
    <Layout>
      <div className="m-auto mt-5" style={{ width: "400px" }}>
        <PassResetForm />
      </div>
    </Layout>
  );
};



import Login from "@/components/otherPages/Login";
import React from "react";

export const metadata = {
  title:
    "Login || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div className="tf-top-bar flex items-center justify-center">
        </div>



        <Login />


      </div>
    </>
  );
}


import Career from "@/components/otherPages/Career";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Career || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "Career page",
};

export default function page() {
  return (
    <>
      <div id="wrapper">


        <div className="main-content pt-0">
          <Career />
        </div>

      </div>
    </>
  );
}
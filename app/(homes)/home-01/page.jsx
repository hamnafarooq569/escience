import Footer from "@/components/footers/Footer";
import Header1 from "@/components/headers/Header1";
import Banner from "@/components/homes/home-1/Banner";
import Banner2 from "@/components/homes/home-1/Banner2";
import BecomeInstactor from "@/components/homes/home-1/BecomeInstactor";
import Blogs from "@/components/homes/home-1/Blogs";
import Brands from "@/components/common/Brands";
import Courses from "@/components/common/Courses";
import Facts from "@/components/homes/home-1/Facts";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Instractors from "@/components/homes/home-1/Instractors";
import Testimonials from "@/components/homes/home-1/Testimonials";
import AssessmentBoards from "@/components/homes/home-1/AssessmentBoards";
import PricingSection from "@/components/homes/home-1/PricingSection";
import AchievementsSection from "@/components/homes/home-1/AchievementsSection";
import CounsellingSection from "@/components/homes/home-1/CounsellingSection";
import FAQSection from "@/components/common/FAQSection";


export const metadata = {
  title:
    "Home 1 || UpSkill - Education Online Courses LMS React Nextjs Template",
  description: "UpSkill - Education Online Courses LMS React Nextjs Template",
};
export default function HomePage1() {
  return (
    <>
      <div id="wrapper">

        <Header1 />
        <Hero />
        <div className="main-content home-main-content">
          
          <AssessmentBoards />
          <Facts />
          <Courses />
          <PricingSection/>
          <Features />
          {/* <Testimonials />
          <Banner /> */}
          <Instractors />
          <Features />
          <AchievementsSection />
          <CounsellingSection />
          <FAQSection />
          {/* <BecomeInstactor />
          <Blogs />
          <Brands />
          <Banner2 /> */}
        </div>
        <Footer />
      </div>
    </>
  );
}

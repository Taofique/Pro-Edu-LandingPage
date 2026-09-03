import type { Route } from "./+types/home";
import Hero from "../../components/home/Hero";
import Courses from "../../components/home/Courses";
import Explore from "../../components/home/Explore";
import Students from "../../components/home/Students";
import Feedback from "../../components/home/Feedback";
import FAQ from "../../components/home/FAQ";
import Join from "../../components/home/Join";
import TrustedCompanies from "../../components/home/TrustedCompanies";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Edu" },
    { name: "description", content: "Welcome to Pro Edu Landing Page!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Courses />
      <Explore />
      <Join />
      <Students />
      <Feedback />
      <FAQ />
      <TrustedCompanies />
    </>
  );
}

import type { Route } from "./+types/home";
import Hero from "../../components/home/Hero";
import Courses from "../../components/home/Courses";

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
    </>
  );
}

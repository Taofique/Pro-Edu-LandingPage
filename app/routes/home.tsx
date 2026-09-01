import type { Route } from "./+types/home";
import Hero from "../../components/home/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Edu" },
    { name: "description", content: "Welcome to Pro Edu Landing Page!" },
  ];
}

export default function Home() {
  return <Hero />;
}

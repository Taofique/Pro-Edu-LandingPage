import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pro Edu" },
    { name: "description", content: "Welcome to Pro Edu Landing Page!" },
  ];
}

export default function Home() {
  return <Welcome />;
}

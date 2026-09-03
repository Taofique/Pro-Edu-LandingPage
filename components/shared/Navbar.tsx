import { useState } from "react";
import { Link } from "react-router";
import Container from "./Container";
import Button from "../ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Deals", href: "/deals" },
  { label: "Success", href: "/success" },
  { label: "About", href: "/about" },
  { label: "Register", href: "/register" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90">
      <Container className="flex items-center justify-between py-6">
        <Link
          to="/"
          className="font-sans text-[28px] font-semibold text-dark-02 sm:text-[32px] lg:text-[40px]"
        >
          Pro Edu
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-sans text-[18px] text-dark-03 transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Register button - hidden on mobile.
            Button uses tailwind-merge internally, so `hidden lg:inline-flex`
            here correctly overrides its base `inline-flex` - no wrapper
            div needed. */}
        <Button
          href="/register"
          variant="outline"
          className="hidden lg:inline-flex !text-[16px] !px-6 !py-2.5"
        >
          Register
        </Button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="h-0.5 w-6 bg-dark-02" />
          <span className="h-0.5 w-6 bg-dark-02" />
          <span className="h-0.5 w-6 bg-dark-02" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-dark-06 lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[16px] text-dark-03 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile Register button - only in hamburger menu */}
            <Button href="/register" variant="outline" className="w-fit">
              Register
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

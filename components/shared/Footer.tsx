import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Container from "./Container";

const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { name: "Twitter", href: "https://twitter.com", Icon: FaTwitter },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedinIn },
  { name: "TikTok", href: "https://tiktok.com", Icon: FaTiktok },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of use", href: "/terms-of-use" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-footer py-16">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Link
          to="/"
          className="font-sans text-[32px] font-semibold text-white sm:text-[40px]"
        >
          Pro Edu
        </Link>

        <p className="font-sans text-[16px] leading-[28px] text-dark-06">
          Office 41, Zawaya Buildin, Ghala Muscat,
          <br />
          Sultanate of Oman
        </p>

        <div className="flex items-center gap-3 font-sans text-[15px] text-dark-06">
          {FOOTER_LINKS.map((link, i) => (
            <span key={link.href} className="flex items-center gap-3">
              <Link
                to={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
              {i < FOOTER_LINKS.length - 1 && <span aria-hidden>|</span>}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { AGENCY } from "@/lib/site-data";

export function Logo({ dark = false }: { dark?: boolean | undefined }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label={`${AGENCY.name} home`}>
      <img
        src="/civaro-logo.png"
        alt="Civaro"
        width={790}
        height={174}
        className={`h-9 w-auto ${dark ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}

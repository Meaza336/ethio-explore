import Link from "next/link";
import { Menu } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Favorites",
    href: "/favorites",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-700"
        >
          EthioExplore
        </Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-green-700 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>

      </nav>
    </header>
  );
}
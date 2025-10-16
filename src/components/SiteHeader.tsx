"use client";
import Image from "next/image";
import Link from "next/link";
import { LinkButton } from "@/components/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "#technology", label: "Technology" },
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#why-corevolt", label: "Why" },
  { href: "#rollout", label: "Rollout" },
  { href: "#impact", label: "Impact" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur bg-[var(--basalt)]/90 border-b border-[var(--lava)]/20">
      <div className="mx-auto max-w-[1240px] px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-1.png" alt="CoreVolt" width={36} height={36} priority className="rounded-lg" />
          <span className="text-base font-medium tracking-tight">CoreVolt</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "text-sm transition-colors " +
                  (active ? "text-[var(--lava)]" : "text-foreground/80 hover:text-foreground")
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--basalt)]/95 backdrop-blur border-t border-[var(--lava)]/20">
          <nav className="px-5 py-4 space-y-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    "block text-sm py-2 transition-colors " +
                    (active ? "text-[var(--lava)]" : "text-foreground/80 hover:text-foreground")
                  }
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4">
              <LinkButton href="#get-involved" variant="primary" size="sm" className="w-full justify-center">
                Get Involved
              </LinkButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}



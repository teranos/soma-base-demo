import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { WalletBadge } from "./WalletBadge";
import { RoleToggle } from "./RoleToggle";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/intake", label: "Create Inquiry" },
  { to: "/researcher/queue", label: "Researcher Queue" }
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-dotted border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 text-soma-teal" onClick={closeMenu}>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-soma-teal/60 bg-slate-900 font-mono text-sm font-semibold">
              SI
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-200">Soma Inquiry Console</span>
          </NavLink>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 md:flex">
              <RoleToggle />
              <WalletBadge />
            </div>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded border border-slate-800/60 bg-slate-900/70 p-2 text-slate-300 transition hover:border-slate-700 hover:text-slate-100 md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav id="primary-navigation" className="hidden items-center gap-4 text-sm text-slate-400 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  "px-2 py-1 transition",
                  isActive ? "text-soma-lime" : "hover:text-slate-200"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {isMenuOpen ? (
          <nav className="flex flex-col gap-2 rounded-lg border border-slate-800/70 bg-slate-950/80 p-4 text-sm text-slate-300 md:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  clsx(
                    "rounded px-2 py-2 transition",
                    isActive ? "bg-slate-900 text-soma-lime" : "hover:bg-slate-900/80"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}

        <div className="flex flex-col gap-3 md:hidden">
          <RoleToggle />
          <WalletBadge />
        </div>
      </div>
    </header>
  );
};

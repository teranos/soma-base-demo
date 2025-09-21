import { NavLink } from "react-router-dom";
import { WalletBadge } from "./WalletBadge";
import { RoleToggle } from "./RoleToggle";
import clsx from "clsx";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/intake", label: "Create Inquiry" },
  { to: "/researcher/queue", label: "Researcher Queue" }
];

export const Navbar = () => {
  return (
    <header className="border-b border-dotted border-slate-800/80 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <NavLink to="/" className="flex items-center gap-2 text-soma-teal">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-soma-teal/60 bg-slate-900 font-mono text-sm font-semibold">
              SI
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-200">Soma Inquiry Console</span>
          </NavLink>
          <nav className="hidden items-center gap-4 text-sm text-slate-400 md:flex">
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
        </div>
        <div className="flex items-center gap-4">
          <RoleToggle />
          <WalletBadge />
        </div>
      </div>
    </header>
  );
};
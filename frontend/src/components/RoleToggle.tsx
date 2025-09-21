import { useMockData } from "../context/MockDataContext";
import clsx from "clsx";

const ROLES = [
  { value: "creator", label: "Creator" },
  { value: "researcher", label: "Researcher" }
] as const;

export const RoleToggle = () => {
  const { wallet, setRole } = useMockData();

  return (
    <div className="inline-flex rounded border border-slate-700/70 bg-slate-900/70 p-0.5 text-xs">
      {ROLES.map((role) => (
        <button
          key={role.value}
          onClick={() => setRole(role.value)}
          className={clsx(
            "px-3 py-1.5 font-medium transition",
            wallet.role === role.value
              ? "bg-slate-800 text-soma-lime shadow-inner"
              : "text-slate-400 hover:text-slate-200"
          )}
        >
          {role.label}
        </button>
      ))}
    </div>
  );
};
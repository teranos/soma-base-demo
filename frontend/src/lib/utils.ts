import { ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(...inputs);
}

export function truncateAddress(address: string, visible = 4) {
  if (!address || address.length <= visible * 2 + 2) {
    return address;
  }
  const prefix = address.slice(0, visible + 2);
  const suffix = address.slice(-visible);
  return `${prefix}...${suffix}`;
}

export function formatRelativeTime(input: string | number | Date) {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) {
    return "just now";
  }
  const diff = Math.max(0, Date.now() - date.getTime());
  const seconds = Math.floor(diff / 1000);
  if (seconds < 4) {
    return "just now";
  }
  if (seconds < 60) {
    return `${seconds}s ago`;
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function formatTime(timestamp: string | number | Date) {
  const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  if (Number.isNaN(date.getTime())) {
    return "--:--:--";
  }
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

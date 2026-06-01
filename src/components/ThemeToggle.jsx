import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return null;
};

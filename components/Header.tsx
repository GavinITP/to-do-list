import Image from "next/image";
import { useContext } from "react";
import { ThemeContext, ThemeContextValue } from "@/contexts/ThemeContext";

const Header = () => {
  const { themeMode, setThemeMode } =
    useContext<ThemeContextValue>(ThemeContext);

  const handleChangeTheme = () => {
    const theme = localStorage.getItem("theme") === "dark" ? "" : "dark";
    localStorage.setItem("theme", theme);
    setThemeMode(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  };

  return (
    <div className="mb-8 flex items-baseline justify-between">
      <h1 className="text-3xl font-bold tracking-[0.5rem] text-white">TODO</h1>
      <button onClick={handleChangeTheme}>
        {themeMode === "dark" ? (
          <Image
            src="icons/icon-sun.svg"
            width={22}
            height={22}
            alt="toggle theme button"
          />
        ) : (
          <Image
            src="icons/icon-moon.svg"
            width={22}
            height={22}
            alt="toggle theme button"
          />
        )}
      </button>
    </div>
  );
};

export default Header;

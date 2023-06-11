import Image from "next/image";

const handleChangeTheme = () => {
  const theme = localStorage.getItem("theme") === "dark" ? "" : "dark";
  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
};

const Header = () => {
  return (
    <div className="mb-10 flex items-baseline justify-between">
      <h1 className="text-3xl font-bold tracking-[0.5rem] text-white">TODO</h1>
      <button onClick={handleChangeTheme}>
        <Image
          src="icons/icon-moon.svg"
          width={22}
          height={22}
          alt="toggle theme button"
        />
      </button>
    </div>
  );
};

export default Header;

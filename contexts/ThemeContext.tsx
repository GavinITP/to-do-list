import { ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface ThemeContextValue {
  themeMode: string;
  setThemeMode: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextValue>(
  {} as ThemeContextValue
);

export const ThemeContextProvider = ({ children }: Props) => {
  const [themeMode, setThemeMode] = useState("");

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "700"],
});

export const metadata = {
  title: "To do list",
  description: "A to do list challenge from Frontend mentor",
};

interface Props {
  children: React.ReactNode;
}

function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body
        className={`${josefin_Sans.className} bg-gray-200 dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;

import "./globals.css";
import { Inter, Lato, Karantina } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const karantina = Karantina({
  weight: "400",

  subsets: ["latin"],
  display: "swap",
  variable: "--font-karantina",
});
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata = {
  title: "Tomi Amao Portfolio",
  description: "A website showcasing my portfolio as a DevOps Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${karantina.variable}`}>
        {children}
      </body>
    </html>
  );
}

import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Recharts Example",
  description: "Bar Chart example created using Recharts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

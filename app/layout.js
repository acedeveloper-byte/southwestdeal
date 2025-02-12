import "./globals.css";

export const metadata = {
  title: "Details on Airport Airlines Terminals Worldwide",
  description:
    "AirportAirlinesTerminal, and have a smooth experience at the airport.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

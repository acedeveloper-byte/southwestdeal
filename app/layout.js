import "./style/global.css";

export const metadata = {
  title: "Details on Southwestdeal Worldwide",
  description:
    "Southwestdeal, and have a smooth experience at the airport.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

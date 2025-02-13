import "../style/global.css";

export const metadata = {
    title: "Packages | Southwestdeal Worldwide",
    description:
        "Southwestdeal, and have a smooth experience at the airport.",
};


export default function PackagesLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

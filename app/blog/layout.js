import "../style/global.css";

export const metadata = {
    title: "Blog | Details on Southwestdeal Worldwide",
    description:
        "Southwestdeal, and have a smooth experience at the airport.",
};


export default function BlogLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

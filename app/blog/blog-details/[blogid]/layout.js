import "../../../style/global.css";

export const metadata = {
    title: "Blog-Details |  Southwestdeal Worldwide",
    description:
        "Southwestdeal, and have a smooth experience at the airport.",
};


export default function BlogDetailsLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

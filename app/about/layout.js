import "../style/global.css"

export const metadata = {
    title: "About Us | Discover more about southwestdeal",
    description:
        "About Us | Discover more about southwestdeal",
};


export default function AboutLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

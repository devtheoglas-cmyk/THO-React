import "./tho.css";

export const metadata = {
  title: "THO Website",
  description:
    "The House of Organic — organic produce website, ported to React/Next.js from the Figma build.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

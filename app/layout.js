import ThemeContext from "./context/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <ThemeContext>{children}</ThemeContext>
      </body>
    </html>
  );
}

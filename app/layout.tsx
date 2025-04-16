import Footer from "./component/footer";
import Navbar from "./component/navbar";
import { roboto, inter } from "@/app/ui/fonts";
import "@/app/global.css";
export const metadata = {
  title: "EasyExplanation",
  icons: {
    icon: [
      { url: "faviconico/favicon.ico", type: "image/x-icon" },
      {
        url: "faviconico/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "faviconico/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className={`${inter.className} antialiased overflow-y-auto no-scrollbar relative z-0`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

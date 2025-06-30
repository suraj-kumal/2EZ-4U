import Footer from "@/app/component/footer";
import Navbar from "@/app/component/navbar";
import { roboto, inter } from "@/app/ui/fonts";
import "@/app/global.css";
import AdBanner from "./component/AdBanner";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Easy Explanation - Online Web Tutorials & Programming Resources",
    template: "%s | Easy Explanation",
  },
  description:
    "Explore CS tutorials and programming resources. Learn Python, Java, JavaScript, data structures, algorithms, and web development with hands-on examples.",
  keywords: [
    "computer science tutorials",
    "programming languages",
    "coding tutorials",
    "Python tutorials",
    "Java programming",
    "JavaScript learning",
    "data structures",
    "algorithms",
    "web development",
    "coding projects",
    "programming for beginners",
    "software development",
    "coding skills",
    "learn coding online",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  authors: [{ name: "Infography Technologies" }],
  creator: "Infography Technologies",
  publisher: "Infography Technologies",
  category: "Education",
  classification: "Computer Science",

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`, // Replace with your actual domain
    siteName: "Easy Explanation",
    title: "Easy Explanation - Online Web Tutorials & Programming Resources",
    description:
      "Master programming with comprehensive tutorials on Python, Java, JavaScript, data structures, algorithms, and web development. Perfect for beginners and experienced developers.",
    images: [
      {
        url: "/ezexplaincard.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Easy Explanation Online Tutorials",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    // site: "@your_twitter_handle", // Replace with your Twitter handle
    // creator: "@your_twitter_handle",
    title: "Easy Explanation - Online Web Tutorials",
    description:
      "Learn programming with comprehensive tutorials on Python, Java, JavaScript, and more. Perfect for all skill levels.",
    images: [
      {
        url: "/ezexplaincard.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Easy Explanation Online Courses",
        type: "image/png",
      },
    ], // Create this image (1200x600px recommended)
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification codes (add your actual verification codes)
  // verification: {
  //   google: "your-google-verification-code",
  //   // yandex: "your-yandex-verification-code",
  //   // bing: "your-bing-verification-code",
  // },

  // Favicon and icons
  icons: {
    icon: [
      { url: "/faviconico/favicon.ico", type: "image/x-icon" },
      {
        url: "/faviconico/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/faviconico/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  // Manifest for PWA
  manifest: "/site.webmanifest",

  // Additional meta tags
  other: {
    "theme-color": "#ffffff",
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/browserconfig.xml",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "IT-Organization",
  name: "Easy Explanation",
  description:
    "Comprehensive online platform for computer science tutorials and programming resources",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}`, // Replace with your actual domain
  logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`, // Add your logo URL
  // sameAs: [
  //   "https://twitter.com/your_handle", // Add your social media URLs
  //   "https://linkedin.com/company/your_company",
  //   "https://github.com/your_github",
  // ],
  // offers: {
  //   "@type": "Offer",
  //   price: "0",
  //   priceCurrency: "USD",
  //   availability: "https://schema.org/InStock",
  // },
  // educationalCredentialAwarded: "Certificate of Completion",
  teaches: [
    "Python Programming",
    "Java Programming",
    "JavaScript Development",
    "Data Structures",
    "Algorithms",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="no-scrollbar">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.className} antialiased overflow-y-auto no-scrollbar relative z-0`}
      >
        <AdBanner
          slot="1112358343"
          format="horizontal"
          style={{ display: "block", width: "100%", height: "90px" }}
        />
        <Navbar />

        <main role="main">{children}</main>
        <div className="h-1 bg-white w-full"></div>
        <Footer />
      </body>
    </html>
  );
}

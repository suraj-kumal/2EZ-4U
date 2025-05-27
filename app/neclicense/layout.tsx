export const metadata = {
  title: {
    default: "NEC License Course - Nepal Engineering Council Training",
    template: "%s | Easy Explanation",
  },
  description:
    "Easy Explanation offers an online NEC license prep course for Computer Engineering grads with video tutorials, expert mentorship, and practice exams.",
  keywords: [
    "NEC license course online",
    "Nepal Engineering Council license",
    "Professional Engineer PE license course",
    "NEC license preparation Nepal",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/neclicense`,
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
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/neclicense`,
    siteName: "Easy Explanation",
    title: "NEC License Course - Nepal Engineering Council Training ",
    description:
      "Prepare for your NEC license with Easy Explanation's online course for Computer Engineers in Nepal.",
    images: [
      {
        url: "/ezexplaincard.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Easy Explanation Online Courses",
        type: "image/png",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    // site: "@your_twitter_handle", // Replace with your Twitter handle
    // creator: "@your_twitter_handle",
    title: "NEC License Course - Nepal Engineering Council Training ",
    description:
      "Prepare for your NEC license with Easy Explanation's online course for Computer Engineers in Nepal.",
    images: ["/ezexplaincard.png"], // Create this image (1200x600px recommended)
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
  //   other: {
  //     "theme-color": "#ffffff",
  //     "msapplication-TileColor": "#da532c",
  //     "msapplication-config": "/browserconfig.xml",
  //   },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Easy Explanation Programming Courses",
  description:
    "Comprehensive online programming courses covering computer science fundamentals and practical development skills",
  url: `${process.env.NEXT_PUBLIC_SITE_URL}/neclicense`,
  provider: {
    "@type": "Organization",
    name: "Easy Explanation",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
  },
  // sameAs: [
  //   "https://twitter.com/your_handle", // Add your social media URLs
  //   "https://linkedin.com/company/your_company",
  //   "https://github.com/your_github",
  // ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  educationalCredentialAwarded: "Certificate of Completion",
  coursePrerequisites: "Basic computer literacy",
  teaches: ["NEC License preparation", "NEC License"],
  audience: {
    "@type": "Audience",
    audienceType: "Students, Developers, Engineers",
  },
  inLanguage: "en",
  availableLanguage: "English",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main role="neclicense">{children}</main>
    </>
  );
}

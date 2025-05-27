import { ReactNode } from "react";
import fetchSeo from "@/app/course/data/fetchSeo";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const course = await fetchSeo(slug);

    // // Handle case where course is not found
    // if (!course) {
    //   return {
    //     title: "Course Not Found - Easy Explanation",
    //     description:
    //       "The requested course could not be found. Browse our other courses to continue learning.",
    //     robots: {
    //       index: false,
    //       follow: false,
    //     },
    //   };
    // }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://ezexplanation.com";
    const canonicalUrl = `${siteUrl}/course/description/${slug}`;
    const ogImageUrl = `${siteUrl}/ezexplaincard.png`;

    // Generate structured data for the course
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: course.title,
      description: course.meta_description,
      url: canonicalUrl,
      provider: {
        "@type": "Organization",
        name: "Easy Explanation",
        url: siteUrl,
      },
      educationalLevel: "Beginner to Advanced",
      courseMode: "Online",
      inLanguage: "en-US",
    };

    return {
      metadataBase: new URL(siteUrl),
      title: course.title,
      description: course.meta_description,
      keywords: course.keywords,
      viewport: "width=device-width, initial-scale=1",
      applicationName: "Easy Explanation",
      alternates: {
        canonical: canonicalUrl,
      },
      authors: [{ name: "Infography Technologies", url: siteUrl }],
      creator: "Infography Technologies",
      publisher: "Infography Technologies",
      category: "Education",
      classification: "Computer Science",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large",
          "max-video-preview": -1,
        },
      },
      openGraph: {
        title: course.title,
        description: course.meta_description,
        url: canonicalUrl,
        siteName: "Easy Explanation",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 600,
            alt: `${course.title} - Easy Explanation Course`,
            type: "image/png",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: course.title,
        description: course.meta_description,
        images: [ogImageUrl],
        // creator: "@your_twitter_handle", // Replace with your actual Twitter handle
        // site: "@your_twitter_handle", // Replace with your actual Twitter handle
      },
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
          {
            url: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
        ],
        other: [
          {
            rel: "mask-icon",
            url: "/safari-pinned-tab.svg",
            color: "#5bbad5",
          },
        ],
      },
      // manifest: "/site.webmanifest", // Add if you have a PWA manifest
      // // Add verification for search engines (replace with your actual verification codes)
      // verification: {
      //   google: "your-google-verification-code",
      //   yandex: "your-yandex-verification-code",
      //   yahoo: "your-yahoo-verification-code",
      //   other: {
      //     "msvalidate.01": "your-bing-verification-code",
      //   },
      // },
      // Add structured data
      other: {
        "application/ld+json": JSON.stringify(structuredData),
      },
    };
  } catch (error) {
    console.error("Error generating metadata for course:", error);

    // Return fallback metadata on error
    return {
      title: "Course Loading Error - Easy Explanation",
      description:
        "There was an error loading the course information. Please try again later.",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
}

const Layout = ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};

export default Layout;

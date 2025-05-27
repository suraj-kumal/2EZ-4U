import { ReactNode } from "react";
import { Metadata } from "next";

interface LayoutProps {
  params: Promise<{ slug: string }>;
  children: ReactNode;
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const props = await { params };
  const slug = params.slug;

  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/neclicense/description/${slug}`;

  return {
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
    authors: [{ name: "Infography Techologies" }],
    publisher: "Infography Techologies",
    alternates: {
      canonical: canonicalUrl,
    },
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
      url: canonicalUrl,
      title: "NEC License Course - Nepal Engineering Council Training ",
      description:
        "Prepare for your NEC license with Easy Explanation's online course for Computer Engineers in Nepal.",
      siteName: "Easy Explanation",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/ezexplaincard.png",
          width: 1200,
          height: 630,
          alt: "NEC License Course - Easy Explanation Online Tutorial",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "NEC License Course - Nepal Engineering Council Training",
      description:
        "Easy Explanation NEC license tutorial for Nepalese engineers. Structured, mentored, and mock-tested.",
      images: ["/ezexplaincard.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", type: "image/x-icon" },
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    },
  };
}

const Layout = async (props: LayoutProps) => {
  const { slug } = await props.params;
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/neclicense/description/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "NEC License Course - Nepal Engineering Council Training",
    description:
      "Easy Explanation provides an online NEC license preparation course tailored for Computer Engineering graduates in Nepal.",
    url: canonicalUrl,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/ezexplaincard.png`,
    provider: {
      "@type": "ITOrganization",
      name: "Easy Explanation",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    coursePrerequisites:
      "Engineering degree from recognized institution in Nepal",
    teaches: [
      "NEC Regulations",
      "Engineering Ethics",
      "PE, EIT, Consulting License Prep",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Engineering Graduates",
      geographicArea: {
        "@type": "Country",
        name: "Nepal",
      },
    },
    courseMode: "online",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Easy Explanation",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    logo: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`,
    description:
      "Online tutorial platform providing comprehensive NEC license preparation courses.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main role="neclicense" itemScope itemType="https://schema.org/Course">
        <meta
          itemProp="name"
          content="NEC License Course - Nepal Engineering Council Training"
        />
        <meta
          itemProp="description"
          content="Easy Explanation NEC license course for Computer Engineers in Nepal."
        />
        <meta itemProp="provider" content="Easy Explanation" />
        {props.children}
      </main>
    </>
  );
};

export default Layout;

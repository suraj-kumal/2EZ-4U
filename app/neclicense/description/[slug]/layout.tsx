import { ReactNode } from "react";
import { Metadata } from "next";

type LayoutProps = {
  children: ReactNode;
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const slug = params.slug;
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/necliense/description/${slug}`;

  return {
    title: {
      default: "NEC License Course - Nepal Engineering Council Training",
      template: "%s | Easy Explanation",
    },
    description:
      "Easy Explanation offers a specialized online NEC license prep course for Computer Engineering grads with video tutorials, expert mentorship, and practice exams.",
    keywords: [
      "NEC license course online",
      "Nepal Engineering Council license",
      "Professional Engineer PE license course",
      "NEC license preparation Nepal",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
      title: "NEC License Course - Nepal Engineering Council Training ",
      description:
        "Prepare for your NEC license with Easy Explanation’s online course for Computer Engineers in Nepal.",
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
  };
}

export default function Layout({ children, params }: LayoutProps) {
  const slug = params.slug;
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
        {children}
      </main>
    </>
  );
}

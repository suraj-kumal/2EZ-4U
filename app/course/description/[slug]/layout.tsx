import { ReactNode } from "react";
import fetchSeo from "@/app/course/data/fetchSeo";
import { Metadata } from "next";

interface LayoutProps {
  params: any;
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
  const course = await fetchSeo(slug);

  const pageTitle = course.title || "Course Page";
  const pageDescription =
    course.meta_description || "Learn more about this course";
  const pageKeywords = course.keywords || "course, learning, education";
  const canonicalUrl = `https://ezexplanation.com/course/${slug}`;
  const ogImageUrl =
    "https://ezexplanation.com/images/default-course-image.jpg";

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: "Infography Technology" }],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      images: [ogImageUrl],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
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
    },
  };
}

const Layout = async (props: LayoutProps) => {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const slug = await params.slug;

  // Fetch SEO data for this course
  const course = await fetchSeo(slug);

  // Use course data for SEO metadata
  const pageTitle = course.title || "Course Page";
  const pageDescription =
    course.meta_description || "Learn more about this course";

  return (
    <>
      <main>{props.children}</main>

      {/* Structured Data for Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: pageTitle,
            description: pageDescription,
            provider: {
              "@type": "Organization",
              name: "Your Organization",
              logo: {
                "@type": "ImageObject",
                url: "https://ezexplanation.com/logo.png",
              },
            },
            url: `https://ezexplanation.com/course/${slug}`,
            keywords: course.keywords
              ?.split(",")
              .map((keyword: string) => keyword.trim()),
          }),
        }}
      />
    </>
  );
};

export default Layout;

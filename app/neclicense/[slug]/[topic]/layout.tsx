import { Metadata } from "next";
import fetchMaterials from "@/app/neclicense/data/fetchMaterials";

// Use any to match Vercel's expectations
type PageProps = {
  params: {
    topic: string;
    slug?: string;
  };
};

export async function generateMetadata(props: any): Promise<Metadata> {
  const { params } = await props;
  const { slug, topic } = await params;

  try {
    const topicContent = await fetchMaterials(topic);

    const generateKeywords = (title: string) => {
      const baseWords = title.toLowerCase().split(/\s+/);
      const additionalKeywords = [
        topicContent.title,
        "ezexplanation",
        "course",
        "guide",
        "tutorial",
        "learning",
        "comprehensive",
        "detailed",
        "easy to understand",
        "educational content",
      ];

      return [...new Set([...baseWords, ...additionalKeywords])].join(", ");
    };

    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/neclicense/${slug}/${topic}`;

    const keywords = generateKeywords(topicContent.title);

    return {
      title: topicContent.title,
      description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
      keywords: keywords,
      alternates: {
        canonical: canonicalUrl,
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
      openGraph: {
        title: topicContent.title,
        description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
        type: "article",
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
        card: "summary",
        title: topicContent.title,
        images: [
          {
            url: "/ezexplaincard.png",
            width: 1200,
            height: 630,
            alt: "NEC License Course - Easy Explanation Online Tutorial",
            type: "image/png",
          },
        ],
        description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
      },
    };
  } catch (error) {
    return {
      title: "Topic Not Found",
      description: "The requested topic could not be found.",
      keywords: "educational content, learning, explanation, tutorial, guide",
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
}

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

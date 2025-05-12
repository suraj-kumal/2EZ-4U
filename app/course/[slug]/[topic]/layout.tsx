import { Metadata } from "next";
import fetchMaterials from "@/app/course/data/fetchMaterials";

// Use any to match Vercel's expectations
type PageProps = {
  params: {
    topic: string;
    slug?: string;
  };
};

export async function generateMetadata(props: any): Promise<Metadata> {
  const { params } = props;
  const { topic } = params;

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

    const keywords = generateKeywords(topicContent.title);

    return {
      title: topicContent.title,
      description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
      keywords: keywords,
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
      },
      twitter: {
        card: "summary",
        title: topicContent.title,
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

// import { Metadata } from "next";
// import fetchMaterials from "@/app/course/data/fetchMaterials";

// type PageProps = {
//   params: {
//     topic: string;
//   };
// };

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { topic } = params;

//   try {
//     const topicContent = await fetchMaterials(topic);

//     const generateKeywords = (title: string) => {
//       const baseWords = title.toLowerCase().split(/\s+/);
//       const additionalKeywords = [
//         topicContent.title,
//         "ezexplanation",
//         "course",
//         "guide",
//         "tutorial",
//         "learning",
//         "comprehensive",
//         "detailed",
//         "easy to understand",
//         "educational content",
//       ];

//       return [...new Set([...baseWords, ...additionalKeywords])].join(", ");
//     };

//     const keywords = generateKeywords(topicContent.title);

//     return {
//       title: topicContent.title,
//       description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
//       keywords: keywords,
//       icons: {
//         icon: [
//           { url: "/faviconico/favicon.ico", type: "image/x-icon" },
//           {
//             url: "/faviconico/favicon-32x32.png",
//             sizes: "32x32",
//             type: "image/png",
//           },
//           {
//             url: "/faviconico/favicon-16x16.png",
//             sizes: "16x16",
//             type: "image/png",
//           },
//         ],
//         shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
//       },
//       openGraph: {
//         title: topicContent.title,
//         description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
//         type: "article",
//       },
//       twitter: {
//         card: "summary",
//         title: topicContent.title,
//         description: `Detailed explanation of ${topicContent.title}. Learn everything you need to know about this topic.`,
//       },
//     };
//   } catch (error) {
//     return {
//       title: "Topic Not Found",
//       description: "The requested topic could not be found.",
//       keywords: "educational content, learning, explanation, tutorial, guide",
//       icons: {
//         icon: [
//           { url: "/faviconico/favicon.ico", type: "image/x-icon" },
//           {
//             url: "/faviconico/favicon-32x32.png",
//             sizes: "32x32",
//             type: "image/png",
//           },
//           {
//             url: "/faviconico/favicon-16x16.png",
//             sizes: "16x16",
//             type: "image/png",
//           },
//         ],
//         shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
//       },
//     };
//   }
// }

// export default function TopicLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }
import { Metadata } from "next";
import fetchSubjects from "@/app/Data/fetchsubjects";

export const revalidate = 600;

// Define a type for the layout props
type LayoutProps = {
  params: {
    slug: string;
    topic: string;
  };
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  try {
    const subjects = await fetchSubjects();
    const subject = subjects.find(
      (s: { slug: string }) => s.slug === params.slug
    );

    if (!subject) {
      return {
        title: "Subject Not Found",
        description: "The requested subject could not be found.",
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

    const generateKeywords = (title: string) => {
      const baseWords = title.toLowerCase().split(/\s+/);
      const additionalKeywords = [
        subject.title,
        "ezexplanation",
        "course",
        "guide",
        "tutorial",
        "learning",
        "comprehensive",
        "detailed",
        "easy to understand",
        "educational content",
        params.slug,
        params.topic,
      ];

      return [...new Set([...baseWords, ...additionalKeywords])].join(", ");
    };

    const keywords = generateKeywords(subject.title);

    return {
      title: subject.title,
      description: `Detailed explanation of ${subject.title}. Learn everything you need to know about this topic.`,
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
        title: subject.title,
        description: `Detailed explanation of ${subject.title}. Learn everything you need to know about this topic.`,
        type: "article",
      },
      twitter: {
        card: "summary",
        title: subject.title,
        description: `Detailed explanation of ${subject.title}. Learn everything you need to know about this topic.`,
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

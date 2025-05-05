import { redirect, notFound } from "next/navigation";
import fetchTopics from "@/app/course/data/fetchTopics";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const chaptersWithTopics = await fetchTopics(slug);

  const firstChapter = chaptersWithTopics[0];
  const firstTopic = firstChapter?.topics[0];

  if (firstTopic) {
    redirect(`/course/${slug}/${firstTopic.slug}`);
  }

  return notFound();
}

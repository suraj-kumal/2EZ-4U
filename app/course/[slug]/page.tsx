import { redirect, notFound } from "next/navigation";
import fetchTopics from "@/app/course/data/fetchTopics";

const Page = async (props: any) => {
  const { params } = props;

  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;
  const chaptersWithTopics = await fetchTopics(slug);

  const firstChapter = chaptersWithTopics[0];
  const firstTopic = firstChapter?.topics[0];
  if (firstTopic) {
    redirect(`/course/${slug}/${firstTopic.slug}`);
  }
  return notFound();
};

export default Page;

import { redirect, notFound } from "next/navigation";
import fetchTopics from "@/app/neclicense/data/fetchTopics";

const Page = async (props: any) => {
  const { params } = props;

  const resolvedParams = params instanceof Promise ? await params : params;
  const { slug } = resolvedParams;
  const chaptersWithTopics = await fetchTopics(slug);

  const firstTopic = chaptersWithTopics[0]?.[0];
  if (firstTopic) {
    redirect(`/neclicense/${slug}/${firstTopic.slug}`);
  }
  return notFound();
};

export default Page;

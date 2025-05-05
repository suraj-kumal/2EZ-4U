import Topics from "@/app/course/data/topics";

const fetchTopics = async (slug: any) => {
  const data = await Topics(slug);

  return data.map((chapter: any) => {
    return {
      id: chapter.uid,
      title: chapter.title,
      slug: chapter.slug,
      topics: chapter.topic.map((topic: any) => {
        return {
          id: topic.uid,
          title: topic.title,
          slug: topic.slug,
        };
      }),
    };
  });
};

export default fetchTopics;

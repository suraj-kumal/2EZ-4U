import Materials from "@/app/course/data/materials";

const fetchMaterials = async (slug: any) => {
  const data = await Materials(slug);
  return {
    title: data.topic.title || "",
    content: data.content || "",
  };
};

export default fetchMaterials;

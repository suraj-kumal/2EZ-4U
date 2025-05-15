import Materials from "@/app/neclicense/data/materials";

const fetchMaterials = async (slug: any) => {
  const data = await Materials(slug);
  return {
    title: data.topic.title || "",
    content: data.content || "",
  };
};

export default fetchMaterials;

import Materials from "@/app/course/data/materials";

const fetchMaterials = async (slug: any) => {
  const data = await Materials(slug);
  return {
    content: data.content || "",
  };
};

export default fetchMaterials;

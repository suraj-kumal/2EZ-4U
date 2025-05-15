import Seo from "@/app/course/data/seo";
const fetchSeo = async (slug: any) => {
  const data = await Seo(slug);
  return {
    id: data.uid,
    title: data.title,
    meta_description: data.meta_description,
    keywords: data.keywords,
  };
};

export default fetchSeo;

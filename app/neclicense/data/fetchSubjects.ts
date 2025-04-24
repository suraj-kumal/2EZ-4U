import neclicense from "@/app/neclicense/data/neclicense";
const fetchSubjects = async () => {
  const data = await neclicense();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL || "";

  return data.map((neclicense: any) => ({
    logo: base_url + neclicense.logo,
    title: neclicense.title,
    slug: neclicense.slug,
    description: neclicense.description,
  }));
};

export default fetchSubjects;

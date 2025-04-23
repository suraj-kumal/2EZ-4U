import Subjects from "@/app/Data/Subjects";
const fetchSubjects = async () => {
  const data = await Subjects();
  const base_url = process.env.NEXT_PUBLIC_BASE_URL || "";

  return data.map((subject: any) => ({
    logo: base_url + subject.logo,
    title: subject.title,
    slug: subject.slug,
    description: subject.description,
  }));
};

export default fetchSubjects;

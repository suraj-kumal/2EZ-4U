import axios from "axios";
const Seo = async (slug: any) => {
  const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  let data;
  try {
    const response = await axios.get(`${base_url}/api/seo/detail/${slug}`, {
      headers: {
        Authorization: `${token}`,
      },
    });
    data = response.data;
    return data;
  } catch (e) {
    console.log("error fetching data :", e);
  }
};

export default Seo;

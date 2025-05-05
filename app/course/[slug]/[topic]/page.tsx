import React from "react";
import fetchMaterials from "@/app/course/data/fetchMaterials";

const page = (props: any) => {
  return <Content {...props} />;
};

export default page;

const Content = async (props: any) => {
  const params =
    props.params instanceof Promise ? await props.params : props.params;
  const topic = params.topic;
  const topiccontent = await fetchMaterials(topic);
  return (
    <>
      <div
        className="prose max-w-none px-8 py-8"
        dangerouslySetInnerHTML={{ __html: topiccontent.content }}
      />
    </>
  );
};

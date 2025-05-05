import React from "react";
import fetchMaterials from "@/app/course/data/fetchMaterials";

interface PageProps {
  params: {
    slug: string;
    topic: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { topic } = await params;
  const topiccontent = await fetchMaterials(topic);

  return (
    <>
      <div
        className="prose max-w-none px-8 py-8"
        dangerouslySetInnerHTML={{ __html: topiccontent.content }}
      />
    </>
  );
}

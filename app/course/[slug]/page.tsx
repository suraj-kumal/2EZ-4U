"use client";
import { useParams } from "next/navigation";

const page = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default page;

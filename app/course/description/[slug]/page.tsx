import { Suspense } from "react";
import SubjectContent from "@/app/course/description/[slug]/subject-content";

export default function SubjectPage({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubjectContent slug={params.slug} />
    </Suspense>
  );
}

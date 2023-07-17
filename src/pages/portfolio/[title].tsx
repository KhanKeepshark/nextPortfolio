import { Project } from "@/components/portfolio/Project";
import { useRouter } from "next/router";

export default function ProjectPage() {
  const { query } = useRouter();

  const id = query.title as string;

  return <Project id={id} />;
}

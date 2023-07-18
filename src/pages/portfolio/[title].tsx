import { Project } from "@/components/portfolio/Project";
import { useRouter } from "next/router";

export default function ProjectPage() {
  const { query } = useRouter();

  return <Project id={query.title as string} />;
}

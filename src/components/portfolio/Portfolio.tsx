import { FC } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsList } from "./db";
import Head from "next/head";
import { observer } from "mobx-react";
import languageStore from "../store/language-store";

export const Portfolio: FC = observer(() => {
  const { lanEng } = languageStore;
  return (
    <>
      <Head>
        <title>{lanEng ? "My Projects" : "Мои Проекты"}</title>
      </Head>
      <div className="flex flex-col items-center sm:p-6 p-2">
        <h1 className="text-4xl font-serif">
          {lanEng ? "My Projects" : "Мои Проекты"}
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
          {projectsList.map((project) => (
            <ProjectCard
              title={project.title}
              img={project.img}
              desc={lanEng ? project.descEng1 : project.descRus1}
              id={project.titleId}
              key={project.titleId}
            />
          ))}
        </div>
      </div>
    </>
  );
});

import { FC, useMemo } from "react";
import { FiArrowRight } from "react-icons/fi";
import ErrorPage from "next/error";
import { Navbar } from "../navbar/Navbar";
import { projectsList } from "./db";
import Head from "next/head";
import { observer } from "mobx-react";
import languageStore from "../store/language-store";

interface IProject {
  id: string;
}

export const Project: FC<IProject> = observer(({ id }) => {
  const project = useMemo(() => {
    return projectsList.filter((project) => project.titleId === id)[0];
  }, [id]);
  const { lanEng } = languageStore;

  if (!project) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <Navbar />
      <div className="mt-10 mb-20 flex flex-col items-center gap-8">
        <div className="text-center flex flex-col items-center">
          <h1 className="sm:text-4xl text-2xl font-serif">{project.title}</h1>
          <p className="text-sm font-light my-4">
            {lanEng ? project.descEng1 : project.descRus1}
          </p>
          <a
            className="h-10 sm:w-40 w-32 flex justify-center items-center bg-black text-white gap-2 rounded-lg border-black
                    hover:bg-white hover:text-black hover:border cursor-pointer"
            href={project.href}
          >
            <p className="text-sm">{lanEng ? "Visit Website" : "Посетить"}</p>
            <FiArrowRight />
          </a>
        </div>
        <img
          src={`/${project.img}`}
          alt=""
          className="lg:w-[660px] sm:w-[460px] lg:h-[455px] sm:h-[255px] w-[280px] h-[155px]"
        />
        <div className="lg:w-[660px] sm:w-[460px] w-[280px] lg:px-20 px-5 text-sm font-light flex flex-col gap-5">
          <p className="text-justify">
            {lanEng ? project.descEng2 : project.descRus2}
          </p>
          <div>
            <h1 className="text-lg font-serif mb-3">
              {lanEng ? "Tech Used" : "Технология"}
            </h1>
            <p className="mb-3">
              <span className="font-bold">Сlient:</span> {project.techC}
            </p>
            <p>
              <span className="font-bold">Server:</span> {project.techB}
            </p>
          </div>
        </div>
      </div>
    </>
  );
});

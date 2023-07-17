import { FC, createElement, useState } from "react";
import { Caveat } from "next/font/google";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { SkillBox } from "./homeComponents/SkillBox";
import { AiOutlineHtml5 } from "react-icons/ai";
import { HiArrowUpRight } from "react-icons/hi2";
import { Exp } from "./homeComponents/Exp";
import { About } from "./homeComponents/About";
import { motion } from "framer-motion";
import { contactLinks, expData, skillLists } from "./db";
import Head from "next/head";
import languageStore from "../store/language-store";
import { observer } from "mobx-react";
const inter = Caveat({ subsets: ["latin"] });

export const Home: FC = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { lanEng } = languageStore;
  return (
    <>
      <Head>
        <title>{lanEng ? "About" : "Обо мне"}</title>
      </Head>
      <div className="flex items-center flex-col">
        <div className="flex flex-col items-center gap-2 select-none">
          <img src="Profile.jpg" alt="" className="w-24 rounded-[40px]" />
          <p className="font-serif text-xl">
            {lanEng ? "Utegen Alikhan" : "Утеген Алихан"}
          </p>
          <h1 className="sm:text-5xl text-2xl font-serif">
            {lanEng ? "FullStack Developer" : "FullStack Разработчик"}
          </h1>
          <p className="font-extralight text-lg text-center lg:p-0 px-10">
            {lanEng
              ? "A result - oriented with a desire for development and self - realization"
              : "Ориентированный на результат с стремлением к развитию и самореализации"}
          </p>
        </div>
        <div
          className={`flex items-center relative cursor-pointer group
          after:absolute after:bottom-[2px] after:border-[0.5px] after:border-black ${
            lanEng
              ? "after:w-[82px] hover:after:w-[98px]"
              : "after:w-[85px] hover:after:w-[101px]"
          }
          after:duration-500 after:transition-all`}
        >
          <button onClick={(e) => setIsOpen(true)}>
            {lanEng ? "Learn More" : "Подробнее"}
          </button>
          <div className="relative w-0 group-hover:w-4 transition-all delay-100">
            <FiArrowRight className="absolute top-[-7px] opacity-0 right-[-2px] group-hover:opacity-100 transition delay-100" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="flex justify-center p-6 gap-6 select-none lg:flex-row flex-col items-center"
      >
        <SkillBox
          header="Front-End"
          skillList={skillLists.front}
          icon={AiOutlineHtml5}
        />
        <SkillBox
          header="Back-End"
          skillList={skillLists.back}
          icon={BsCodeSlash}
        />
        <SkillBox header="Other" skillList={skillLists.other} icon={FiLayers} />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className="p-6 flex justify-center"
      >
        <div className="text-center select-none">
          <p className="font-light text-sm">{lanEng ? "EXPIRIENCE" : "ОПЫТ"}</p>
          <h1 className="sm:text-4xl text-2xl font-serif mb-2">
            {lanEng ? "Developer Career" : "Карьера Разработчика"}
          </h1>
          {expData.map((data) => (
            <Exp
              expData={data[0]}
              icon={data[1]}
              key={data[0].company}
              eng={lanEng}
            />
          ))}
          <a
            className={`mt-5 relative flex justify-center items-center gap-1 cursor-pointer transition-all duration-300
            after:absolute after:bottom-[1px] after:border-[0.5px] after:border-black after:border-dashed
            hover:gap-2  after:transition-all after:duration-300 ${
              lanEng
                ? "after:w-[110px] hover:after:w-[114px]"
                : "after:w-[140px] hover:after:w-[144px]"
            }`}
          >
            <p className="font-extralight">
              {lanEng ? "Download CV" : "Скачать Резюме"}
            </p>
            <HiArrowUpRight className="text-sm" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          delay: 0.1,
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-10 gap-5"
      >
        <div className="text-center select-none">
          <p className="font-light text-sm">
            {lanEng ? "CONTACTS" : "КОНТАКТЫ"}
          </p>
          <h1 className="sm:text-4xl text-2xl font-serif">
            {lanEng ? "Let's stay connected" : "Давайте будем на связи"}
          </h1>
        </div>
        <div className="flex gap-3">
          {contactLinks.map((link) => (
            <a
              key={link[1]}
              href={link[1]}
              className={`h-8 w-8 rounded-lg shadow-xl border border-b-2 hover:border-b border-black flex items-center justify-center cursor-pointer ${link[2]}`}
            >
              {createElement(link[0])}
            </a>
          ))}
        </div>
      </motion.div>
      {isOpen && <About setIsOpen={setIsOpen} eng={lanEng} />}
    </>
  );
});

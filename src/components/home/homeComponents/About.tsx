import { FC } from "react";
import { motion } from "framer-motion";

interface IAbout {
  setIsOpen: (isOpen: boolean) => void;
  eng: boolean;
}

export const About: FC<IAbout> = ({ setIsOpen, eng }) => {
  return (
    <div
      onClick={(e) => setIsOpen(false)}
      className="h-screen w-screen bg-white bg-opacity-80 flex justify-center items-center fixed top-0 left-0 px-3"
    >
      <motion.div
        className="w-[700px] overflow-hidden border rounded-3xl shadow-lg border-gray-400 select-none"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          type: "spring",
          delay: 0.1,
        }}
      >
        <div className="h-16 bg-white flex items-center justify-center border-b border-gray-400">
          <h1 className="sm:text-3xl text-2xl font-serif">
            {eng ? "About" : "Обо мне"}
          </h1>
        </div>
        <div className="bg-gray-100 h-full flex justify-center p-6">
          <div className="w-[456px] text-black text-justify text-sm sm:text-lg">
            <p className="font-extralight">
              {eng
                ? "Hello! I'm Utegen Alikhan, a passionate and dedicated developer with a love for creating innovative solutions. I am constantly striving to expand my knowledge and stay up-to-date with the latest industry trends. I am a quick learner, adaptable, and always eager to take on new challenges."
                : "Привет! Я Утеген Алихан, страстный и преданный своему делу разработчик, которому нравится создавать инновационные решения. Я постоянно стремлюсь расширять свои знания и быть в курсе последних тенденций отрасли. Я быстро учусь, легко приспосабливаюсь и всегда готов браться за новые задачи."}
            </p>
            <p className="font-extralight mt-4">
              {eng
                ? "Beyond my technical skills, I value effective communication and teamwork. I enjoy working collaboratively, brainstorming ideas, and finding creative solutions together. I believe that building strong relationships with clients and colleagues is key to successful project execution."
                : "Помимо моих технических навыков, я ценю эффективное общение и командную работу. Мне нравится работать сообща, проводить мозговой штурм идей и вместе находить творческие решения. Я считаю, что построение прочных отношений с клиентами и коллегами является ключом к успешному выполнению проекта."}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

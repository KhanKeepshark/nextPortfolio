import { FC } from "react";

interface ISkillBox {
  header: string;
  skillList: string[];
  icon: any;
}

export const SkillBox: FC<ISkillBox> = ({ header, skillList, icon: Icon }) => {
  return (
    <div className="lg:w-[240px] sm:w-[300px] w-[240px] h-[364px] rounded-3xl border border-gray-400 shadow-lg">
      <div className="flex justify-center items-center h-16 font-serif text-xl border-b border-gray-400">
        <Icon className="text-3xl mr-1" />
        <h1>{header}</h1>
      </div>
      <div className="text-center">
        {skillList.map((skill) => (
          <p className="pt-3" key={skill}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

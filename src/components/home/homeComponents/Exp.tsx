import { FC } from "react";

interface IExp {
  expData: {
    company: string;
    monthEng: string;
    monthRus: string;
    year: string;
  };
  icon: any;
  eng: boolean;
}

export const Exp: FC<IExp> = ({ expData, icon: Icon, eng }) => {
  return (
    <div
      className="flex p-4 sm:w-[450px] w-[290px] gap-2 relative
        after:border-b after:border-gray-400 after:bottom-0 after:left-[16px] after:absolute sm:after:w-[418px] after:w-[258px]"
      key={expData.company}
    >
      <div className="h-12 w-12 rounded-xl shadow-xl border border-black flex items-center justify-center">
        <Icon className="text-2xl" />
      </div>
      <div className="text-start w-full">
        <p className=" font-semibold">{expData.company}</p>
        <div className="flex justify-between font-light">
          <p>{eng ? expData.monthEng : expData.monthRus}</p>
          <p>{expData.year}</p>
        </div>
      </div>
    </div>
  );
};

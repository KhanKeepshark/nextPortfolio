import Link from "next/link";
import { FC } from "react";

interface IProjectCard {
  id: string;
  title: string;
  img: string;
  desc: string;
}

export const ProjectCard: FC<IProjectCard> = ({ id, title, img, desc }) => {
  return (
    <Link
      href={`/portfolio/${id}`}
      className="sm:w-80 w-[280px] h-[350px] bg-gray-50 p-4 rounded-3xl border border-gray-400 hover:bg-gray-100"
    >
      <img
        className="h-[200px] rounded border border-gray-300"
        src={img}
        alt=""
      />
      <div className="my-5">
        <p className="text-2xl font-serif mb-2">{title}</p>
        <p className="text-sm font-light">{desc}</p>
      </div>
    </Link>
  );
};

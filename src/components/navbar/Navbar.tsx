import { FC, useState } from "react";
import { CiUser, CiGrid42, CiGlobe } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import Link from "next/link";
import languageStore from "../store/language-store";
import { observer } from "mobx-react";

export const Navbar: FC = observer(() => {
  const { lanEng, changeLan } = languageStore;
  const [navToggle, setNavToggle] = useState<boolean>(false);

  const navLinkClasses =
    "flex mx-3 lg:py-0 py-2 cursor-pointer text-gray-500 hover:text-black hover:font-extralight";

  return (
    <div className="h-20 flex items-center justify-center mb-4">
      <div className="h-14 shadow-2xl border border-gray-300 rounded-3xl py-4 px-1 fixed bg-white z-10">
        <div
          className="lg:hidden flex mx-5 cursor-pointer"
          onClick={(e) => setNavToggle(true)}
        >
          <AiOutlineBars className="text-2xl mr-3" />
          <p className="font-light">{lanEng ? "Menu" : "Меню"}</p>
        </div>
        <div
          className={`${
            !navToggle && "hidden"
          } lg:flex lg:flex-row lg:static lg:border-0 lg:gap-0 lg:p-0 flex-col items-center absolute bg-white top-0 left-0 rounded-3xl border border-black py-3 gap-2`}
        >
          <div
            className={`${navLinkClasses} mb-1 lg:hidden`}
            onClick={(e) => setNavToggle(false)}
          >
            <HiOutlineXMark className="text-2xl mr-1" />
            <p className="font-light">{lanEng ? "Close" : "Закрыть"}</p>
          </div>
          <Link href="/" className={navLinkClasses}>
            <CiUser className="text-2xl mr-1" />
            <p className="font-light">{lanEng ? "About" : "Обо мне"}</p>
          </Link>
          <Link href="/portfolio" className={navLinkClasses}>
            <CiGrid42 className="text-2xl mr-1" />
            <p className="font-light">{lanEng ? "Portfolio" : "Портфолио"}</p>
          </Link>
          <div className={navLinkClasses} onClick={(e) => changeLan(!lanEng)}>
            <CiGlobe className="text-2xl mr-1" />
            <p className="font-light">{lanEng ? "Language" : "Язык"}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

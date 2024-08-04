import navButton from "@/Components/Button/navButton";
import { useTranslation } from "react-i18next";

const HomeIntro = () => {
  const { t } = useTranslation();

  return (
    <div className=" flex flex-col gap-2 w-1/2 md:w-full text-white playfair pb-4">
      <h1 className="text-xl md:text-lg ph:text-base flex h-fit whitespace-nowrap	"> {t("home_header")}</h1>
      <h2 className="clicker text-[14rem] lg:text-[11rem] md:text-[9rem] ph:text-[7rem]"> {t("coffee")}</h2>
      <article className=" text-xl md:text-lg ph:text-base playfair  flex h-1/4 w-4/5 overflow-y-hidden">{t("home_sub")}</article>
      <div className="mt-4">{navButton("header_btn")}</div>
    </div>
  );
};
export default HomeIntro;

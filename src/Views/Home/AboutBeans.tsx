import AboutCoffee from "./AboutCoffee";
import { useTranslation } from "react-i18next";

const AboutBeans = () => {
  const { t } = useTranslation();
  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="w-full text-center gap-5 playfair text-coffee-brown flex flex-col">
        <h2 className="tracking-wide font-bold text-4xl">{t("perfection")}</h2>
        <span>{t("information")}</span>
      </div>

      <div className="w-full  p-5 flex flex-col my-20 bg-Low_yellow border-Low_Yellow_border outline-1 outline outline-Low_Yellow_border">
        <span className="text-8xl text-coffee-brown playfair flex">“</span>
        <AboutCoffee />
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-2xl font-bold text-coffee-brown">{t("jonnynames")}</h2>
          <span className="text-center text-coffee-brown">{t("jonnysjob")}</span>
          <div className="flex justify-center ">
            <img style={{ top: "5rem" }} className="w-28 relative h-28 " src="../.././public/footer/bipedar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBeans;

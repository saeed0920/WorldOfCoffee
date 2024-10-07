import "@public/logo/logo.svg";
import IdMaker from "./Footer_id_maker";
import { Translation, useTranslation } from "react-i18next";
const Footer = () => {
  //i khow this is bullshit i khow  but how many i tried it didnt append my image to the footer with css
  const { t } = useTranslation();
  return (
    <>
      <footer className="w-full h-96 bg-coffee-brown">
        <div className="h-full w-full flex px-10 py-6 footers">
          <div className="flex gap-5">
            <div className="flex flex-col w-2/5 justify-center text-white gap-5 ">
              <img src="/logo/logo.svg" className="w-1/2" alt="" />
              <div className="text-container">
                <p className="text-clamp">{t("footer_text")}</p>
              </div>
            </div>
            <div className="flex flex-1 w-2/5 gap-1    h-full flex-col">
              {IdMaker("RezaNezhadSalari", "https:/www.linkedin.com/in/reza-nezhadsalari/")}
              {IdMaker("saeed0920", "www.linkedin.com/in/saeed-dev")}
              {IdMaker("AliAbbasiS", "https://www.linkedin.com/in/ali-abbasi-836478233/")}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

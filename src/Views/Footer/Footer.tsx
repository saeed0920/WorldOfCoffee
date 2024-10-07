import "@public/logo/logo.svg";
import IdMaker from "./Footer_id_maker";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  const developers = [
    {
      username: "RezaNezhadSalari",
      linkedinUrl: "https:/www.linkedin.com/in/reza-nezhadsalari-dev/",
    },
    {
      username: "saeed0920",
      linkedinUrl: "https:/www.linkedin.com/in/saeed-dev/",
    },
    {
      username: "AliAbbasiS",
      linkedinUrl: "https://www.linkedin.com/in/ali-abbasi-836478233/",
    },
  ];
  return (
    <>
      <footer className="w-full h-96 bg-coffee-brown lg:h-72">
        <div className="h-full w-full flex px-10 py-6 lg:px-6 lg:py-4 md:px-4   footers">
          <div className="flex gap-5 justify-center md:gap-2">
            <div className="flex flex-col w-2/5 justify-center text-white gap-5 ">
              <img src="/logo/logo.svg" className="w-56" />
              <div className="text-container">
                <p className="text-clamp headerSub !text-white">{t("footer_text")}</p>
              </div>
            </div>
            <div className="grid gap-2 grid-cols-3 items-center justify-center lg:grid-cols-2 sm:grid-cols-1">
              {developers.map((person: { username: string; linkedinUrl: string }) => {
                return <IdMaker username={person.username} linkedin={person.linkedinUrl} key={person.username} />;
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

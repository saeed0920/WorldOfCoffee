import { useTranslation } from "react-i18next";

const VersusCoffee = () => {
  const { t } = useTranslation();

  return (
    <div className="versusCoffee_header flex flex-col mx-auto justify-center text-center">
      <h2 className="playfair header1">{t("versusCoffeeHeader")}</h2>
      <p className="playfair headerSub pt-4">{t("versusCoffeeSub")}</p>
    </div>
  );
};

export default VersusCoffee;

import "@public/font/font.css";
import navButton from "@/Components/Button/navButton";
import { useTranslation } from "react-i18next";
import Cappuccino from "../Coffee's/Cappuccino";

export function Discover() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-1  relative pt-40 pb-20">
      <div className="flex flex-col gap-2 w-1/2 md:w-full">
        <h1 className="flex flex-col playfair header1">{t("discover_h1")}</h1>
        <article className="pt-4 headerSub playfair">{t("discover_sub")}</article>
        <div className="pt-3">{navButton("Learn More")}</div>
      </div>
      <div className="flex flex-1 justify-center">
        <Cappuccino />
      </div>
    </section>
  );
}

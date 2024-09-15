import "@public/font/font.css";
import navButton from "@/Components/Button/navButton";
import { useTranslation } from "react-i18next";
import Template from "@/Views/Coffee's/Template";
import { useCoffee } from "@/Contexts/CoffeesContext";

export function Discover() {
  const { t } = useTranslation();
  const coffeeList = useCoffee();

  if (!coffeeList) {
    return <p>Loading coffee data...</p>;
  }

  if (coffeeList.length === 0) {
    return <p>No coffee data available.</p>;
  }

  const randomIndex = Math.floor(Math.random() * coffeeList.length);
  const randomCoffee = coffeeList[randomIndex];

  return (
    <section className="flex flex-1  relative pt-40 pb-20">
      <div className="flex flex-col gap-2 w-1/2 md:w-full">
        <h1 className="flex flex-col playfair header1">{t("discover_h1")}</h1>
        <article className="pt-4 headerSub playfair">{t("discover_sub")}</article>
        <div className="pt-3">{navButton("Learn More")}</div>
      </div>
      <div className="flex flex-1 justify-center ">
        <Template title={randomCoffee.name} describe={randomCoffee.description} key="1" img="./public/Images/Cappu.jpg"></Template>
      </div>
    </section>
  );
}

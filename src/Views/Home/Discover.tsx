import "@public/font/font.css";
import navButton from "@/Components/Button/navButton";
import { useTranslation } from "react-i18next";
import Template from "@/Views/Coffee's/Template";
import { useCoffee } from "@/Contexts/CoffeesContext";
import { useState, useEffect } from "react";
import { Coffee } from "@/types";

export function Discover() {
  const { t } = useTranslation();
  const coffeeList = useCoffee();
  const [randomCoffee, setRandomCoffee] = useState<Coffee | null>(null);

  useEffect(() => {
    if (coffeeList.length > 0) {
      const randomIndex = Math.floor(Math.random() * coffeeList.length);
      setRandomCoffee(coffeeList[randomIndex]);
    }
  }, [coffeeList]);

  return (
    <section className="flex flex-1  relative pt-40 pb-20">
      <div className="flex flex-col gap-2 w-1/2 md:w-full">
        <h1 className="flex flex-col playfair header1">{t("discover_h1")}</h1>
        <article className="pt-4 headerSub playfair">{t("discover_sub")}</article>
      </div>
      <div className="flex flex-1 justify-center ">
        {randomCoffee ? (
          <Template title={randomCoffee.name} describe={randomCoffee.description} img={`public/Images/${randomCoffee.name}.jpg`}></Template>
        ) : (
          <Template title={""} describe={""} img=""></Template>
        )}
      </div>
    </section>
  );
}

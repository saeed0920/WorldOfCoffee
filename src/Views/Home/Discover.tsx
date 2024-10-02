import "@public/font/font.css";
import { useTranslation } from "react-i18next";
import Template from "@/Views/Coffee's/Template";
import { useCoffee } from "@/Contexts/CoffeesContext";
import { useState, useEffect } from "react";
import { Coffee } from "@/types";
import { Skeleton } from "@chakra-ui/react";

export function Discover() {
  const { t } = useTranslation();
  const coffeeList = useCoffee();
  const [randomCoffee, setRandomCoffee] = useState<Coffee | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (coffeeList.length > 0) {
      const randomIndex = Math.floor(Math.random() * coffeeList.length);
      setRandomCoffee(coffeeList[randomIndex]);
      setIsLoading(false);
    }
  }, [coffeeList]);

  return (
    <section className="flex w-full pt-40 gap-2 pb-20 md:flex-col lg:px-10 lg:py-10 mt-10">
      <div className="flex flex-col flex-1 gap-2 md:w-full ">
        <h1 className="flex flex-col playfair header1">{t("discover_h1")}</h1>
        <article className="pt-4 headerSub playfair">{t("discover_sub")}</article>
      </div>
      {/* grid-cols-[20rem,25rem,20rem] lg:grid-cols-[18rem,18rem]  gap-4 lg:gap-2 sm:gap-1 sm:grid-cols-[10rem,10rem] ph:grid-cols-[8rem,8rem] */}
      <Skeleton className="flex justify-center mx-auto w-[20rem] lg:w-[18rem] sm:w-[10rem] self-start" isLoaded={!isLoading}>
        {randomCoffee ? (
          <Template
            title={randomCoffee.name}
            describe={randomCoffee.description}
            img={`images/${randomCoffee.name.replace(" ", "_")}.jpg`}
          ></Template>
        ) : (
          <Template title={""} describe={""} img=""></Template>
        )}
      </Skeleton>
    </section>
  );
}

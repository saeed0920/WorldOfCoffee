import { createContext, useContext, useEffect, useState } from "react";
import PropTypes, { InferProps } from "prop-types";
import type { Coffee } from "@/types";
import { useToast } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const CoffeeContext = createContext<Coffee[] | undefined>(undefined);
const BASE_URL = process.env.BASE_URL;

function CoffeeProvider({ children }: InferProps<typeof CoffeeProvider.propTypes>) {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);
  const { t } = useTranslation();
  const toast = useToast();

  useEffect(
    function () {
      function fetchCoffeeData() {
        fetch(`${BASE_URL}/coffees`)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok"); // Throw an error if the response is not ok
            }
            return res.json();
          })
          .then((data: Coffee[]) => {
            setCoffeeList(data);
          })
          .catch((error) => {
            console.log(error);
            toast({
              title: t("error_api_title"),
              description: t("error_api_describe"),
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top-right",
            });
          });
      }
      fetchCoffeeData();
    },
    [t, toast],
  );

  return <CoffeeContext.Provider value={coffeeList}>{children}</CoffeeContext.Provider>;
}

function useCoffee() {
  const context = useContext(CoffeeContext);
  if (context === undefined) throw new Error("CoffeeContext was used outside the CitiesProvider");
  return context;
}

export { CoffeeProvider, useCoffee };
CoffeeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

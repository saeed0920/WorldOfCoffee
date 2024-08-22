import { createContext, useContext, useEffect, useState } from "react";
import PropTypes, { InferProps } from "prop-types";

// TODO: TYPE OF ANY
const CoffeeContext = createContext({} as any);
const BASE_URL = process.env.BASE_URL;

function CoffeeProvider({ children }: InferProps<typeof CoffeeProvider.propTypes>) {
  const [coffeeList, setCoffeeList] = useState<any>([]);

  useEffect(function () {
    function fetchCoffeeData() {
      fetch(`${BASE_URL}/coffees`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("you'r internet is shit");
          }
          return res.json();
        })
        .then((data) => {
          setCoffeeList(data);
        });
    }
    fetchCoffeeData();
  }, []);

  return <CoffeeContext.Provider value={coffeeList}>{children}</CoffeeContext.Provider>;
}

function useCoffee() {
  const context = useContext(CoffeeContext);
  if (context === undefined) throw new Error("CoffeeContext was used outside the CitiesProvider");
  return context;
}

export { CoffeeProvider, useCoffee };
CoffeeProvider.propTypes = {
  //TODO: TYPE OF ANY
  children: PropTypes.any,
};

import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const CoffeeContext = createContext();
const BASE_URL = "http://localhost:8000";

function CoffeeProvider({ children }) {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(function () {
    async function fetchCoffeeData() {
      try {
        const res = await fetch(`${BASE_URL}/coffees`);
        if (!res.ok) {
          throw new Error("yout internet is shit");
        }
        const data = res.json();
        console.log(data);
        setCoffeeList(data);
      } catch (error) {
        console.error("fuck you", error);
      }
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
  children: PropTypes.any,
};

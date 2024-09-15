import { useCoffee } from "@/Contexts/CoffeesContext";
import Cappu from "@public/Images/Cappu.jpg";
//This Compo it might be updated So... tell me then change it -_-
function Cappuccino() {
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
    <div className="flex flex-col border-2 border-coffee-brown pb-14" style={{ backgroundColor: "wheat" }}>
      <p className="text-center playfair">Describe Coffee</p>
      <img src={Cappu} />
      <p className="text-center text-coffee-brown playfair text-2xl py-3 bold">{randomCoffee.name}</p>
      <p className="text-center playfair text-l">{randomCoffee.description}</p>
    </div>
  );
}

export default Cappuccino;

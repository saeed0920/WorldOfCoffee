import { useEffect, useState } from "react";

interface CoffeeBean {
  id: number;
  name: string;
  description: string;
}

const AboutCoffee = () => {
  const [coffeeData, setCoffeeData] = useState<CoffeeBean[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/CoffeeBeansTypes.json");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data: CoffeeBean[] = await res.json();
        setCoffeeData(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // دکمه "بعدی"
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coffeeData.length);
  };

  // دکمه "قبلی"
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? coffeeData.length - 1 : prevIndex - 1));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data.</div>;
  }

  if (coffeeData.length === 0) {
    return <div>No coffee data available.</div>;
  }

  const currentCoffee = coffeeData[currentIndex];

  return (
    <div>
      <h1 className="text-2xl text-coffee-brown text-center">{currentCoffee.name}</h1>
      <p className="text-lg text-center my-3">{currentCoffee.description}</p>

      <div className="flex justify-between my-8">
        <button onClick={handleNext} style={{ left: "-3rem" }} className="p-5 rounded-md relative bg-late-white">
          <img src="../.././public/footer/Vector11.svg" alt="" />
        </button>
        <button onClick={handleBack} style={{ right: "-3rem" }} className="p-5 relative rounded-md bg-late-white">
          <img src="../.././public/footer/Vector1.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default AboutCoffee;

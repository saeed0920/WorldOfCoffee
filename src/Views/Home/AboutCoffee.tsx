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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % coffeeData.length);
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
      <h1>{currentCoffee.name}</h1>
      <p>{currentCoffee.description}</p>
      <button onClick={handleNext}>Next Coffee</button>
    </div>
  );
};

export default AboutCoffee;

import { useTranslation } from "react-i18next";
import type { Coffee } from "@/types";
import { Text, Select, Skeleton, useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Template from "@/Views/Coffee's/Template";

const VersusCoffee = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const mainApi = process.env.BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [coffees, setCoffees] = useState([]);
  const [coffee1, setCoffee1] = useState({} as Coffee);
  const [selectorOption1, setSelectorOption1] = useState("");
  const [selectorOption2, setSelectorOption2] = useState("");
  const [option1, setOption1] = useState<Coffee>();
  const [option2, setOption2] = useState<Coffee>();

  const getOption = useCallback(() => {
    fetch(`${mainApi}/coffees`)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: t("error_api_title"),
          description: t("error_api_describe"),
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      });
  }, [t, toast, mainApi]);

  useEffect(() => {
    setIsLoading(false);
    getOption();
  }, [getOption]);

  useEffect(() => {
    const result = coffees.find((coffee: Coffee) => coffee.id === selectorOption1);
    setOption1(result);
  }, [selectorOption1, coffees]);

  useEffect(() => {
    const result = coffees.find((coffee: Coffee) => coffee.id === selectorOption2);
    setOption2(result);
  }, [selectorOption2, coffees]);

  return (
    <div className="versusCoffee_header flex flex-col mx-auto justify-center text-center py-4">
      <h2 className="playfair header1">{t("versusCoffeeHeader")}</h2>
      <p className="playfair headerSub pt-4">{t("versusCoffeeSub")}</p>
      <div className="mt-6">
        <Skeleton borderColor="gray" className="grid items-start grid-cols-3 gap-4" isLoaded={isLoading}>
          <div className="flex flex-col gap-2">
            <Select
              value={selectorOption1}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectorOption1(event.target.value);
              }}
              placeholder={t("default_placeholder")}
            >
              {coffees.map((coffee: Coffee) => (
                <option disabled={coffee.id === selectorOption2} value={coffee.id} key={coffee.id}>
                  {coffee.name}
                </option>
              ))}
            </Select>
            {option1 && <Template title={option1.name} describe={option1.description} img="./public/Images/Cappu.jpg"></Template>}
          </div>
          <Text as="abbr"></Text>
          <div className="flex flex-col gap-2">
            <Select
              value={selectorOption2}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectorOption2(event.target.value);
              }}
              placeholder={t("default_placeholder")}
            >
              {coffees.map((coffee: Coffee) => (
                <option disabled={coffee.id === selectorOption1} value={coffee.id} key={coffee.id}>
                  {coffee.name}
                </option>
              ))}
            </Select>
            {option2 && <Template title={option2.name} describe={option2.description} img="./public/Images/Cappu.jpg"></Template>}
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default VersusCoffee;

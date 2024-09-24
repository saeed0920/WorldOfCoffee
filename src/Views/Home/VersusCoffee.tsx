import { useTranslation } from "react-i18next";
import type { Coffee, Different } from "@/types";
import { Text, Select, Skeleton, useToast, Fade, SlideFade } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Template from "@/Views/Coffee's/Template";

const VersusCoffee = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const mainApi = process.env.BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [different, setDifferent] = useState<Different[]>([]);
  const [differentResult, setDifferentResult] = useState<string>("");
  const [selectorOption1, setSelectorOption1] = useState<number>(0);
  const [selectorOption2, setSelectorOption2] = useState<number>(0);
  const [option1, setOption1] = useState<Coffee>();
  const [option2, setOption2] = useState<Coffee>();
  const [show, setShow] = useState<boolean>(true);
  const [isOpenOption1, setIsOpenOption1] = useState<boolean>(true);
  const [isOpenOption2, setIsOpenOption2] = useState<boolean>(true);

  const getOption = useCallback(() => {
    fetch(`${mainApi}/coffees`)
      .then((res) => res.json())
      .then((data: Coffee[]) => {
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

  const getDifferent = useCallback(() => {
    fetch(`${mainApi}/different`)
      .then((res) => res.json())
      .then((data: Different[]) => {
        setDifferent(data);
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
    getDifferent();
  }, [getOption, getDifferent]);

  useEffect(() => {
    const result = coffees.find((coffee: Coffee) => Number(coffee.id) === selectorOption1);
    setIsOpenOption1(false);
    setTimeout(() => {
      setIsOpenOption1(true);
      setOption1(result);
    }, 250);
  }, [selectorOption1, coffees]);

  useEffect(() => {
    const result = coffees.find((coffee: Coffee) => Number(coffee.id) === selectorOption2);
    setIsOpenOption2(false);
    setTimeout(() => {
      setIsOpenOption2(true);
      setOption2(result);
    }, 250);
  }, [selectorOption2, coffees]);

  useEffect(() => {
    if (option1 && option2) {
      const result: Different | undefined = different.find(
        (different) =>
          (different.coffee1 === option1.name || different.coffee1 === option2.name) &&
          (different.coffee2 === option2.name || different.coffee2 === option1.name),
      );
      setShow(false);
      setTimeout(() => {
        setShow(true); // Hide the text after a delay
        setDifferentResult(result ? result?.comparisonDescription : "");
      }, 150); // Duration of the fade effect
    } else if (differentResult) {
      setShow(false);
      setTimeout(() => {
        setShow(true);
        setDifferentResult("");
      }, 200);
    }
  }, [option1, option2, different, differentResult]);

  return (
    <div className="versusCoffee_header flex flex-col mx-auto justify-center text-center py-4">
      <h2 className="playfair header1">{t("versusCoffeeHeader")}</h2>
      <p className="playfair headerSub pt-4">{t("versusCoffeeSub")}</p>
      <div className="mt-6">
        <Skeleton borderColor="gray" className="grid items-start grid-cols-[20rem,25rem,20rem] gap-4" isLoaded={isLoading}>
          <div className="flex flex-col items-center gap-2 min-h-[30rem]">
            <Select
              textAlign="center"
              width="18rem"
              value={selectorOption1}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectorOption1(Number(event.target.value));
              }}
              placeholder={t("default_placeholder")}
            >
              {coffees.map((coffee: Coffee) => (
                <option disabled={Number(coffee.id) === selectorOption2} value={coffee.id} key={coffee.id}>
                  {coffee.name}
                </option>
              ))}
            </Select>
            <SlideFade offsetY="1.5rem" in={isOpenOption1}>
              {option1 && (
                <Template title={option1.name} describe={option1.description} img={`public/Images/${option1.name.replace(" ", "_")}.jpg`}></Template>
              )}
            </SlideFade>
          </div>
          <Fade className="p-1 rounded-lg shadow-md  bg-[wheat] mt-5" in={show}>
            <Text alignSelf="top" as="abbr" fontSize="md">
              {differentResult || t("default_different_result")}
            </Text>
          </Fade>
          <div className="flex flex-col gap-2">
            <Select
              width="18rem"
              textAlign="center"
              value={selectorOption2}
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setSelectorOption2(Number(event.target.value));
              }}
              placeholder={t("default_placeholder")}
            >
              {coffees.map((coffee: Coffee) => (
                <option disabled={Number(coffee.id) === selectorOption1} value={coffee.id} key={coffee.id}>
                  {coffee.name}
                </option>
              ))}
            </Select>
            <SlideFade offsetY="1.5rem" in={isOpenOption2}>
              {option2 && (
                <Template title={option2.name} describe={option2.description} img={`public/Images/${option2.name.replace(" ", "_")}.jpg`}></Template>
              )}
            </SlideFade>
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default VersusCoffee;

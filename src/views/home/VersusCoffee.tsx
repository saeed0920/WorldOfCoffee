import { useTranslation } from "react-i18next";
import { Box, Select, Skeleton, SkeletonCircle, SkeletonText, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Template from "@/views/Coffee's/Template";

const VersusCoffee = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const mainApi = process.env.BASE_URL;
  const [isLoading, setIsLoading] = useState(true);
  const [coffees, setCoffees] = useState([]);

  const getOption = () => {
    fetch(`${mainApi}/coffees`)
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
        setIsLoading(false);
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
  };

  useEffect(() => {
    setIsLoading(true);
    getOption();
  }, []);

  return (
    <div className="versusCoffee_header flex flex-col mx-auto justify-center text-center">
      <h2 className="playfair header1">{t("versusCoffeeHeader")}</h2>
      <p className="playfair headerSub pt-4">{t("versusCoffeeSub")}</p>
      <Template title="slm" img="./public/Images/Cappu.jpg"></Template>
      <div className="mt-4">
        <Skeleton isLoaded={!isLoading}>
          <Box>
            <Select placeholder="slm" variant="filled"></Select>
          </Box>
          <Box>
            <Select placeholder="slm" variant="filled"></Select>
          </Box>
        </Skeleton>
      </div>
    </div>
  );
};

export default VersusCoffee;

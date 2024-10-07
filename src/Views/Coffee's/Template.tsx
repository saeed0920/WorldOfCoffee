import { Box, Collapse, Heading, Image, Text } from "@chakra-ui/react";
import PropsTypes, { InferProps } from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Template({ title, describe, img }: InferProps<typeof Template.propsTypes>) {
  const [isHover, setIsHover] = useState(false);
  const [t] = useTranslation();
  return (
    <>
      <Box
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        boxShadow="md"
        flexDirection="column"
        display="flex"
        gap=".2rem"
        borderRadius="md"
        overflow="hidden"
        backgroundColor="wheat"
      >
        <Image src={img} alt={title} objectFit="cover" width="100%" />
        <Heading
          as="h2"
          fontWeight="600"
          size={{ base: "sm", ph: "md", sm: "lg" }}
          fontFamily="Playfair Display"
          display="flex"
          gap=".2rem"
          alignItems="center"
          alignSelf="center"
        >
          {title}
        </Heading>
        <Collapse in={isHover} startingHeight={1}>
          <Text
            paddingY={{ base: ".2rem", ph: ".4rem", sm: ".8rem" }}
            paddingX={{ base: ".4rem", ph: ".6rem", sm: ".8rem" }}
            textAlign="center"
            fontSize={{ base: "smaller", ph: "small", sm: "medium" }}
            as="p"
          >
            {describe || t("default_describe_coffee")}
          </Text>
        </Collapse>
      </Box>
    </>
  );
}

Template.propsTypes = {
  title: PropsTypes.string.isRequired,
  describe: PropsTypes.string,
  img: PropsTypes.string.isRequired,
};

export default Template;

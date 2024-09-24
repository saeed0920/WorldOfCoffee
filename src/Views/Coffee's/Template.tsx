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
        gap=".4rem"
        borderRadius="md"
        overflow="hidden"
        w="18rem"
        backgroundColor="wheat"
      >
        <Image src={img} alt={title} objectFit="cover" width="100%" minHeight="250px" />
        <Heading as="h2" fontWeight="600" size="lg" fontFamily="Playfair Display" display="flex" gap=".2rem" alignItems="center" alignSelf="center">
          {title}
        </Heading>
        <Collapse in={isHover} startingHeight={1}>
          <Box padding=".2rem .6rem">
            <Text as="i">{describe || t("default_describe_coffee")}</Text>
          </Box>
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

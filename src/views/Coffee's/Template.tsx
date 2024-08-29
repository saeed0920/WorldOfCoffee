import { Box, Collapse, Heading, Image, Text } from "@chakra-ui/react";
import PropsTypes, { InferProps } from "prop-types";
import { useState } from "react";

function Template({ title, describe, img }: InferProps<typeof Template.propsTypes>) {
  const [isHover, setIsHover] = useState(false);
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
        w="20rem"
        backgroundColor="wheat"
      >
        <Image src={img} alt={title} objectFit="cover" width="100%" />
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <Collapse in={isHover} startingHeight={1}>
          <Text as="i">{describe || ""}</Text>
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

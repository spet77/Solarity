import { VStack, HStack, Heading, Button, Text, Image } from "@chakra-ui/react";
import NextChakraLink from "@components/nextChakraLink";

export default function Home() {
  return (
    <>
    <HStack justify="center" height="78vh">
      <VStack w="50%">
        <Heading>
          We Are
        </Heading>
        <Heading fontSize={50}>
          Solarity or wtv frfr
        </Heading>
        <Text w="1000px" fontSize={30}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, ligula et venenatis facilisis, leo turpis tincidunt nisi,
          nec pellentesque nisi tellus non leo. Phasellus pulvinar massa ac elit aliquet, ut facilisis sapien faucibus. Ut efficitur nulla urna,
          rhoncus egestas urna auctor non. Duis euismod lacus urna, in hendrerit sapien faucibus et.
        </Text>
        <NextChakraLink href='/'>
          <Button colorScheme="secondary">begin</Button>
        </NextChakraLink>
      </VStack>
      <Image src='earf.svg' width={500}/>
    </HStack>
    <HStack height="100vh" backgroundColor="quaternary" justify="center">
      <VStack w="50%">
        <Heading>
          What we offer
        </Heading>
        <Text w="1000px" fontSize={30}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, ligula et venenatis facilisis, leo turpis tincidunt nisi,
          nec pellentesque nisi tellus non leo. Phasellus pulvinar massa ac elit aliquet, ut facilisis sapien faucibus. Ut efficitur nulla urna,
          rhoncus egestas urna auctor non. Duis euismod lacus urna, in hendrerit sapien faucibus et.
        </Text>
      </VStack>
    </HStack>
    </>
  );
}

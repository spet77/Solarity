import { useColorModeValue } from "@chakra-ui/react";
import { Heading, HStack, VStack } from "@chakra-ui/react";

export default function Main() {
	return (
		<VStack
			spacing={0}
		>
			<HStack
				justify="space-between"
				bg="linear-gradient(to right, #EB9486, #F3DE8A)"
				px="50px"
				py="10px"
				as="header"
				w="100%"
			>
				<Heading color="white">Solarity</Heading>
			</HStack>
			<svg viewBox="0 0 1000 100">
				<linearGradient id="gradient">
					<stop
						stopColor={useColorModeValue('#EB9486', '#EB9486')}
						offset="0%"
					/>
					<stop
						stopColor={useColorModeValue('#F3DE8A', '#F3DE8A')}
						offset="100%"
					/>

				</linearGradient>
				<path
					fill="url(#gradient)"
					d="M 0 50 Q 250 100 500 50 T 1000 50 L 1000 0 L 0 0 Z"
				/>
			</svg>
		</VStack>

	);
}

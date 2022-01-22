import { MoonIcon } from "@chakra-ui/icons"
import { Box, Flex, IconButton, Stack, Text, useColorMode } from "@chakra-ui/react"
import Link from "next/link"

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bgColor = { light: "gray.300", dark: "gray.600" }
    const textColor = { light: "black", dark: "gray.100" }

    return (
        <Flex
            w="100vw"
            bg={bgColor[colorMode]}
            align="center" 
            color={textColor[colorMode]}
            justify="center"
            fontSize={["md", "lg", "xl", "xl"]}
            h="7vh"
            boxShadow="md"
            p={2}
        >
            <Flex w={["100vw", "100vw", "80vw", "80vw"]}>
                <Box mr={8}>
                    <Text fontWeight="bold">LOGO</Text>
                </Box>
                <Stack
                    spacing={8}
                    color={textColor[colorMode]}
                    justify="center"
                    align="center"
                    isInline
                >
                    <Link href="/">
                            Home
                    </Link>
                    <Link href="/tasks">
                        Tasks
                    </Link>
                    <IconButton
                        icon={<MoonIcon />}
                        isRound={true}
                        size="sm"
                        alignSelf="flex-end"
                        aria-label="Color Mode"
                        onClick={toggleColorMode}
                    />
                </Stack>
            </Flex>            
        </Flex>
    )
}

export default Navbar
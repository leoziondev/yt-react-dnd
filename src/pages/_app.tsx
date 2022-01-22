import { ChakraProvider, Flex } from '@chakra-ui/react'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex direction="column" align="center">
        <Navbar />
        <Flex justify="center" align="center">
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp

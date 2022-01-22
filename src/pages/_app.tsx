import { ChakraProvider, Flex } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DndProvider backend={HTML5Backend}>
        <Flex direction="column" align="center">
          <Navbar />
          <Flex justify="center" align="center">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </DndProvider>
    </ChakraProvider>
  )
}

export default MyApp

import React from 'react';
import {FaCheckCircle , FaDiscord} from 'react-icons/fa'
import {RiShieldStarLine} from 'react-icons/ri'
import {BsArrowCounterclockwise} from 'react-icons/bs'
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Button,
  Stack,
  List,
  ListItem,
  ListIcon,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <Box>
      <Grid bg='blue' h="50vh" w="100vw">
        <ColorModeSwitcher justifySelf="flex-end" mr={10} zIndex={100}/>
      </Grid>
      <Box bg="white" h="50vh" w="100vw">

      </Box>
      <Flex position="absolute" top="0" left="0" bg="transparent" h="100vh" w="100vw" align='center' justify ='center'>
        <VStack spacing={10} w="70%">
          <Box>
            <Heading fontSize={54} color="white" align="center">
              Simple Pricing for your business
            </Heading>
            <Text color="white" fontSize={24} align="center">
              Plans that are carefully crafted to suit your business.
            </Text>
          </Box>
          <Flex  w='full' boxShadow = '2xl' borderRadius={15} >
            <Box w="35%" bgColor="blue.200" borderLeftRadius={15} >
              <VStack p={6} spacing={5}>
                <Heading as='h4' fontSize={25}>Premium PRO</Heading>
                <Heading as='h1' fontSize={40}>$329</Heading>
                <Text fontSize={20}>billed just once</Text>
                <Button colorScheme='purple' w='full' rounded='md'>Get Started</Button>
              </VStack>
            </Box>
            <Box w="65%" bgColor="white" borderRightRadius={15} >
              <Stack fontSize={19} p={10}>
                <Text>Acces these features when you get this pricing package for your business</Text>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='blue'/>
                    International calling and messaging API
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='blue'/>
                    Additional phone numbers
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='blue'/>
                    Automated messages via Zapier
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color='blue'/>
                    24/7 support and consulting
                  </ListItem>
                </List>
              </Stack>
            </Box>
          </Flex>
          <Flex fontWeight={500} align='center' justify='space-around'>
            <HStack spacing={2} flex={1}>
              <Icon as={RiShieldStarLine} fontSize={60} color='blue'/>
              <Text fontSize={25}>
                30 days money back garantee
              </Text>
            </HStack>
            <HStack spacing={2} flex={1}>
              <Icon as={FaDiscord} fontSize={60} color='blue'/>
              <Text fontSize={25}>
                No setup fees 100% hassle-free
              </Text>
            </HStack>
            <HStack spacing={2} flex={1}>
              <Icon as={BsArrowCounterclockwise} fontSize={60} color='blue'/>
              <Text fontSize={25}>
                No monthly subscription pay once and for all
              </Text>
            </HStack>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}

export default App;

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    WrapItem,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
  } from '@chakra-ui/react';

 function Product(props) {
    return (
      <WrapItem>
        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'282px'}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={282}
                width={282}
                objectFit={'cover'}
                src={props.product.image}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Text color={'gray.500'} fontSize={'md'} textTransform={'uppercase'}>
                {props.product.brand}
              </Text>
              <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500} align={'center'}>
                {props.product.name}
              </Heading>
              <Text color={'gray.500'} fontSize={'xl'}>
                {props.product.unit}
              </Text>
              <Stack direction={'row'} align={'center'}>
                <Text fontWeight={700} fontSize={'xl'}>
                  S/. {props.product.price}
                </Text>
                <Text textDecoration={'line-through'} color={'gray.600'}>
                  S./  {props.product.lastprice}
                </Text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <NumberInput maxW={20} precision={0} step={1} defaultValue={1} min={1} max={24}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Button>Agregar</Button>
              </Stack>
              <Center color = {'green'} borderColor={'green.500'} borderWidth='1px' w='100%' h='35px' >
                <Text>✓ 5 en el carrito</Text> 
              </Center>
            </Stack>
          </Box>
        </Center>
      </WrapItem>
          );
  }

  export default Product
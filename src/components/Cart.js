import React from "react";

import { 
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Text,
    useDisclosure 
    } from '@chakra-ui/react';

function Cart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
                bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
            >
          Carrito
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'md'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Carrito de compras</DrawerHeader>
  
            <DrawerBody>
              <Text>Aquí va el carrito</Text>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cerrar
              </Button>
              <Button colorScheme='blue'>Comporar por Whatsapp</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default Cart;
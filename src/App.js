import React, { Component } from 'react';
import { Stack, Wrap, Text } from '@chakra-ui/react';
import Products from './components/Products';
import products from './products.json';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

class App extends Component {
  state = {
    products: products
  }

  render () {
    return <Stack>
      <NavBar/>
      <Cart/>
      <Text>mis productos son:</Text>
      <Wrap spacing='30px' justify='center'>
        <Products products = {this.state.products}/>
      </Wrap>
    </Stack>
  }  
}

export default App;
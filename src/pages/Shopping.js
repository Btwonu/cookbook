import { useState, useEffect } from 'react';

import Button from '../components/Button';
import Layout from './layouts/Layout';

const products = [
  {
    name: 'cheese',
  },
];

function Shopping() {
  return (
    <Layout>
      <ShoppingList />
    </Layout>
  );
}

function ShoppingList() {
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);

  const onInputChange = (e) => {
    setProduct(e.target.value);
  };

  const onInputKeyPress = (e) => {
    if (e.target.value === '') return;

    if (e.keyCode === 13) {
      let name = e.target.value;

      let product = {
        name,
      };

      // add to list
      console.log({ products });
      setProducts([...products, product]);
      setProduct('');
    }
  };

  const productsList = products.map((product, index) => {
    return <li key={index}>{product.name}</li>;
  });

  return (
    <>
      <ul>{productsList}</ul>
      <input
        type="text"
        onChange={onInputChange}
        value={product}
        onKeyDown={onInputKeyPress}
      />
      <Button>Save</Button>
    </>
  );
}

export default Shopping;

import { useState, useEffect } from 'react';

import Button from '../components/Button';
import Layout from './layouts/Layout';

import { MdClose } from 'react-icons/md';

const products = [
  {
    name: 'cheese',
  },
];

function Shopping() {
  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Shopping List</h2>
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
    return <Product key={index} name={product.name} />;
  });

  return (
    <section className="border max-w-screen-md mx-auto flex flex-col items-center p-10">
      <ul className="w-4/5 p-4 text-lg">{productsList}</ul>
      <input
        type="text"
        onChange={onInputChange}
        value={product}
        onKeyDown={onInputKeyPress}
      />
      <Button>Save</Button>
    </section>
  );
}

function Product({ name }) {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input type="checkbox" />
        <p>{name}</p>
      </div>
      <MdClose />
    </li>
  );
}

export default Shopping;

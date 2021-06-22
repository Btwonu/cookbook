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
  const [groceries, setGroceries] = useState([]);

  const onInputChange = (e) => {
    setProduct(e.target.value);
  };

  const onProductAdd = (e) => {
    if (product === '') return;
    e.preventDefault();

    let name = product;

    let productData = {
      name,
    };

    // add to list
    setGroceries([...groceries, productData]);
    setProduct('');
  };

  const onDeleteIconClick = (e, id) => {
    let filteredProducts = groceries.filter((p, i) => i !== id);
    setGroceries(filteredProducts);
  };

  const productsList = groceries.map((product, index) => {
    return (
      <Product
        key={index}
        id={index}
        name={product.name}
        deleteHandler={onDeleteIconClick}
      />
    );
  });

  return (
    <section className="border max-w-screen-md mx-auto flex flex-col items-center p-10">
      <ul className="w-4/5 p-4 text-lg">{productsList}</ul>
      <form className="w-4/5 p-4 flex gap-4" onSubmit={onProductAdd}>
        <input
          className="border w-full bg-light p-2 focus:outline-none
          focus:ring-2
          focus:ring-primary"
          type="text"
          onChange={onInputChange}
          value={product}
          // onKeyDown={onInputKeyPress}
        />
        <button className="btn">Add</button>
      </form>
    </section>
  );
}

function Product({ name, deleteHandler, id }) {
  console.log(id);
  return (
    <li id={id} className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Checkbox label={name} />
      </div>
      <button className="cursor-pointer" onClick={(e) => deleteHandler(e, id)}>
        <MdClose />
      </button>
    </li>
  );
}

function Checkbox({ label }) {
  return (
    <>
      <input className="transform scale-150" id={label} type="checkbox" />
      <label for={label}>{label}</label>
    </>
  );
}

export default Shopping;

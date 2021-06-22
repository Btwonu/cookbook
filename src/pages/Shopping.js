import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import shoppingListService from '../services/shoppingListService';
import { useAuth } from '../contexts/AuthContext';

import Button from '../components/Button';
import Layout from './layouts/Layout';

import { MdClose } from 'react-icons/md';

function Shopping() {
  const { user } = useAuth();

  useEffect(() => {
    shoppingListService
      .get()
      .then((r) => console.log({ r }))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Shopping List</h2>
      <ShoppingList />
    </Layout>
  );
}

function ShoppingList() {
  const [productValue, setProductValue] = useState('');
  const [products, setProducts] = useState([]);

  const onInputChange = (e) => {
    setProductValue(e.target.value);
  };

  const onProductAdd = (e) => {
    if (productValue === '') return;
    e.preventDefault();

    let productData = {
      id: uniqid(),
      name: productValue,
      completed: false,
    };

    // add to list
    setProducts([...products, productData]);
    setProductValue('');
  };

  const onDeleteIconClick = (e, id) => {
    let filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const onToggleCheckbox = (id) => {
    const updatedProducts = products.map((product) => {
      if (id === product.id) {
        return {
          ...product,
          completed: !product.completed,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const onShoppingListSave = () => {
    shoppingListService
      .save(products)
      .then((r) => {
        console.log({ r });
      })
      .catch(console.error);
  };

  const productsList = products.map((product) => {
    return (
      <Product
        key={product.id}
        id={product.id}
        name={product.name}
        deleteHandler={onDeleteIconClick}
        completed={product.completed}
        toggleProduct={onToggleCheckbox}
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
          value={productValue}
        />
        <button className="btn">Add</button>
      </form>
      <Button block className="mt-4" onClick={onShoppingListSave}>
        Save
      </Button>
    </section>
  );
}

function Product({ id, name, deleteHandler, completed, toggleProduct }) {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input
          className="transform scale-150"
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleProduct(id)}
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <button className="cursor-pointer" onClick={(e) => deleteHandler(e, id)}>
        <MdClose />
      </button>
    </li>
  );
}

export default Shopping;

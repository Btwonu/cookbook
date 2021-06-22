import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';

import Layout from './layouts/Layout';

import shoppingListService from '../services/shoppingListService';
import { useAuth } from '../contexts/AuthContext';

import ShoppingList from '../components/ShoppingList';

function Shopping({ history }) {
  const [productValue, setProductValue] = useState('');
  const [products, setProducts] = useState([]);

  const { updateUser } = useAuth();

  useEffect(() => {
    updateUser()
      .then((user) => {
        setProducts(user.shoppingList.products);
      })
      .catch(console.error);
  }, []);

  // Handlers
  const changeProductValue = (e) => {
    setProductValue(e.target.value);
  };

  const addProduct = (e) => {
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

  const deleteProduct = (e, id) => {
    let filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  const toggleProductCheckbox = (id) => {
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

  const saveShoppingList = () => {
    shoppingListService
      .save(products)
      .then((r) => {
        history.push('/');
      })
      .catch(console.error);
  };

  return (
    <Layout>
      <h2 className="text-center text-2xl p-6">Shopping List</h2>
      <ShoppingList
        products={products}
        deleteProduct={deleteProduct}
        toggleProductCheckbox={toggleProductCheckbox}
        addProduct={addProduct}
        changeProductValue={changeProductValue}
        productValue={productValue}
        saveShoppingList={saveShoppingList}
      />
    </Layout>
  );
}

export default withRouter(Shopping);

import { useState } from 'react';

import MenuItem from './MenuItem';
import Product from './Product';
import Button from './Button';
import Spinner from 'react-spinkit';

function ShoppingList({
  isLoading,
  products,
  deleteProduct,
  toggleProductCheckbox,
  addProduct,
  changeProductValue,
  productValue,
  saveShoppingList,
}) {
  const uncompletedProductList = products.map((product) => {
    if (!product.completed) {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          deleteProduct={deleteProduct}
          completed={product.completed}
          toggleProductCheckbox={toggleProductCheckbox}
        />
      );
    }
  });

  const completedProductList = products.map((product) => {
    if (product.completed) {
      return (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          deleteProduct={deleteProduct}
          completed={product.completed}
          toggleProductCheckbox={toggleProductCheckbox}
        />
      );
    }
  });

  return (
    <section className="border max-w-screen-md mx-auto flex flex-col items-center p-10">
      {isLoading ? (
        <div className="h-24 flex items-center">
          <Spinner
            name="ball-scale-ripple-multiple"
            color="var(--color-accent)"
          />
        </div>
      ) : (
        <>
          <ul className="w-4/5 p-4 text-lg">{uncompletedProductList}</ul>
          <hr className="w-4/5 m-auto" />
          <ul className="w-4/5 p-4 text-lg">
            <MenuItem
              isDropdown
              menuItemList={completedProductList}
              subMenuClasses="line-through"
            >
              Completed
            </MenuItem>
          </ul>
        </>
      )}

      <form className="w-4/5 p-4 flex gap-4" onSubmit={addProduct}>
        <input
          className="border w-full bg-light p-2 focus:outline-none
          focus:ring-2
          focus:ring-primary"
          type="text"
          onChange={changeProductValue}
          value={productValue}
        />
        <button className="btn">Add</button>
      </form>
      <Button block className="mt-4" onClick={saveShoppingList}>
        Save
      </Button>
    </section>
  );
}

export default ShoppingList;

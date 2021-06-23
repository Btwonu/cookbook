import { useState } from 'react';

import Product from './Product';
import Button from './Button';
import Spinner from 'react-spinkit';

function ShoppingList({
  products,
  deleteProduct,
  toggleProductCheckbox,
  addProduct,
  changeProductValue,
  productValue,
  saveShoppingList,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const productsList = products.map((product) => {
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
  });

  return (
    <section className="border max-w-screen-md mx-auto flex flex-col items-center p-10">
      {isLoading ? (
        <Spinner
          className="relative left-1/2 top-1/4"
          name="ball-scale-ripple-multiple"
          color="var(--color-accent)"
        />
      ) : (
        <ul className="w-4/5 p-4 text-lg">{productsList}</ul>
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

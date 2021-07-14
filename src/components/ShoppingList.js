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
  const incompleteProductList = products
    .filter((product) => !product.completed)
    .map((product) => {
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

  const completeProductList = products
    .filter((product) => product.completed)
    .map((product) => {
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
        <div className="h-24 flex items-center">
          <Spinner
            name="ball-scale-ripple-multiple"
            color="var(--color-accent)"
          />
        </div>
      ) : (
        <>
          {incompleteProductList.length > 0 ? (
            <ul className="w-4/5 p-4 text-lg">{incompleteProductList}</ul>
          ) : (
            <h2>Add products..</h2>
          )}

          {completeProductList.length > 0 && (
            <>
              <hr className="w-4/5 m-auto" />
              <ul className="w-4/5 p-4 text-lg">
                <MenuItem
                  isDropdown
                  menuItemList={completeProductList}
                  subMenuClasses="line-through"
                >
                  Completed
                </MenuItem>
              </ul>
            </>
          )}
        </>
      )}

      <form
        className="w-4/5 p-4 flex flex-col sm:flex-row gap-4"
        onSubmit={addProduct}
      >
        <input
          className="block border w-full bg-light p-2 focus:outline-none
          focus:ring-2
          focus:ring-primary"
          type="text"
          onChange={changeProductValue}
          value={productValue}
        />
        {/* <button className="btn">Add</button> */}
        <Button className="">Add</Button>
        <Button block className="" onClick={saveShoppingList}>
          Save
        </Button>
      </form>
    </section>
  );
}

export default ShoppingList;

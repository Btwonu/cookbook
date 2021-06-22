import { MdClose } from 'react-icons/md';

function Product({
  id,
  name,
  deleteProduct,
  completed,
  toggleProductCheckbox,
}) {
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input
          className="transform scale-150"
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleProductCheckbox(id)}
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <button className="cursor-pointer" onClick={(e) => deleteProduct(e, id)}>
        <MdClose />
      </button>
    </li>
  );
}

export default Product;

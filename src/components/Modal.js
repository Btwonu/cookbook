import { MdClose } from 'react-icons/md';

const Modal = ({ children, isOpened, closeHandler }) => {
  if (isOpened) {
    return (
      <div className="bg-transparent absolute top-0 left-0 h-screen w-screen">
        <div className="bg-light absolute center-absolute w-2/6 h-3/6 pt-9 overflow-scroll">
          <button
            className="text-dark cursor-pointer text-2xl absolute right-2 top-2"
            onClick={closeHandler}
          >
            <MdClose />
          </button>
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;

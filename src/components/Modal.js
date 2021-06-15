import { MdClose } from 'react-icons/md';

const Modal = ({ children, isOpened, closeHandler }) => {
  if (isOpened) {
    return (
      <div className="bg-transparent absolute -top-0 -left-0 h-screen w-screen">
        <div className="bg-light absolute top-1/2 left-1/2 w-2/6 h-2/6 transform -translate-x-1/2 -translate-y-1/2">
          <MdClose
            className="text-dark cursor-pointer text-2xl absolute right-2 top-2"
            onClick={closeHandler}
          />
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;

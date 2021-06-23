import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdExpandMore } from 'react-icons/md';

const MenuItem = ({
  linkTo,
  children,
  isDropdown,
  menuItemList,
  subMenuClasses,
}) => {
  const [menuOpened, setMenuOpened] = useState();

  // old submenu classes -> 'flex flex-col items-start max-w-fit-content';

  const openMenu = (e) => {
    e.preventDefault();

    if (menuOpened) {
      setMenuOpened(false);
    } else {
      setMenuOpened(true);
    }
  };

  return (
    <>
      <li className="list-none" onClick={isDropdown ? openMenu : null}>
        <Link
          className="flex items-center p-2 hover:bg-primary"
          to={isDropdown ? '#' : linkTo}
        >
          {children}
          {isDropdown ? (
            <button>
              <MdExpandMore className="ml-2" />
            </button>
          ) : null}
        </Link>
      </li>
      {menuOpened ? <ul className={subMenuClasses}>{menuItemList}</ul> : null}
    </>
  );
};

export default MenuItem;

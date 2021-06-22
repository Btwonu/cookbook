const Button = ({ children, linkTo, className, onClick, block }) => {
  if (!className) {
    className = '';
  }

  const clickHandler = (e) => {
    if (!onClick) return;

    e.preventDefault();
    onClick();
  };

  let displayType = block ? ' block' : ' inline-block';

  return (
    <a
      href={linkTo || '#'}
      className={'btn text-center ' + className + displayType}
      onClick={clickHandler}
    >
      {children}
    </a>
  );
};

export default Button;

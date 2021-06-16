const Button = ({ children, linkTo, className, onClick, block }) => {
  if (!className) {
    className = '';
  }

  let displayType = block ? ' block' : ' inline-block';

  return (
    <a
      href={linkTo || '#'}
      className={'btn text-center ' + className + displayType}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Button;

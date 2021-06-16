const Button = ({ children, linkTo, className, onClick }) => {
  return (
    <a
      href={linkTo || '#'}
      className={'btn inline-block ' + className}
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Button;

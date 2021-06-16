const Avatar = ({ src }) => {
  return (
    <img
      className="rounded-full m-auto w-full h-full"
      src={src}
      alt="An avatar"
    />
  );
};

export default Avatar;

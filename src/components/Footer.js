const Footer = () => {
  const exampleLinks = [
    'http://example.com',
    'http://example.com',
    'http://example.com',
    'http://example.com',
  ];

  return (
    <footer className="text-accentDark">
      <div className="container px-5 py-8 mx-auto flex md:items-center md:flex-row md:flex-nowrap flex-wrap flex-col lg:px-10">
        <div className="text-center mt-10 md:text-left md:mt-0">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-dark"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-dark rounded-full"
              viewBox="0 0 24 24"
            ></svg>
            <span className="ml-3 text-xl">Cookbook</span>
          </a>

          <p className="mt-2 text-sm">Put your logo here</p>
        </div>

        <div className="flex-grow flex flex-wrap md:text-left text-center order-first">
          <FooterCategory title="Recipe resources" links={exampleLinks} />
          <FooterCategory title="Youtube channels" links={exampleLinks} />
        </div>
      </div>

      <div className="bg-main">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm text-center sm:text-left">© 2021 Cookbook</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </span>
        </div>
      </div>
    </footer>
  );
};

function FooterCategory(props) {
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium text-dark tracking-widest text-sm mb-3">
        {props.title}
      </h2>
      <ul className="list-none text-dark">
        {props.links.map((link, index) => {
          return (
            <li key={index}>
              <a className="hover:text-accentDark cursor-pointer">{link}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;

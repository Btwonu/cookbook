import { IconContext } from 'react-icons';
import {
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { SiIfood } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-primary text-dark border-primary h-full p-6 pb-0">
      <SiIfood className="text-accent m-auto my-4" size={'2.6rem'} />

      <IconContext.Provider
        value={{
          size: '1.8rem',
          className: 'text-secondary mx-2 cursor-pointer',
        }}
      >
        <div className="flex justify-center my-2">
          <a
            href="https://github.com/Btwonu"
            target="_blank"
            rel="noopener noreferrer"
            className="relative t-1"
          >
            <TiSocialGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/valdechev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedin />
          </a>

          <a
            href="https://twitter.com/Btwonu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialTwitter />
          </a>
        </div>
      </IconContext.Provider>

      <hr className="border-t border-gray-300 w-3/4 m-auto" />
      <p className="text-center py-2">&#169; 2021 Cookbook App</p>
    </footer>
  );
};

export default Footer;

// border-top: 1px solid #8c8b8b;
// border-bottom: 1px solid #fff;

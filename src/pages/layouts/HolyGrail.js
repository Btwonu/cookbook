import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { ThemeProvider } from '../../contexts/themeContext';

const HolyGrail = (props) => {
  return (
    <ThemeProvider>
      <Header />
      <div className="flex flex-col bg-light">{props.children}</div>
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default HolyGrail;

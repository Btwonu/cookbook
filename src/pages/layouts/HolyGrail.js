import Header from '../../components/Header';

import { ThemeProvider } from '../../contexts/ThemeContext';

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

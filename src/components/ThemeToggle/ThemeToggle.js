import { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { MdBrightnessMedium } from 'react-icons/md';
import './styles.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggled, setToggled] = useState(theme === 'dark' ? 'true' : 'false');

  // useEffect(() => {
  //   console.log('from theme toggle:', theme);
  //   // setTheme(toggled ? 'dark' : 'light');
  // }, [theme, toggled, setTheme]);

  const toggleTheme = (e) => {
    // let state = e.target.ariaChecked;
    // let isChecked = state === 'true';
    let isChecked = toggled === 'true';

    // e.target.setAttribute('aria-checked', isChecked ? 'false' : 'true');

    setToggled(isChecked ? 'false' : 'true');
    setTheme(isChecked ? 'light' : 'dark');
  };

  return (
    <div className="p-2 flex items-center">
      {/* <label>
        <input
          type="checkbox"
          checked={isDark()}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        ></input>
        Dark Mode
      </label> */}

      <label htmlFor="theme-toggle" className="switch visually-hidden">
        Dark Mode
      </label>
      <MdBrightnessMedium />
      <button
        type="button"
        role="switch"
        aria-checked={toggled}
        id="theme-toggle"
        className="switch"
        onClick={toggleTheme}
      >
        <span>off</span>
        <span>on</span>
      </button>
    </div>
  );
};

export default ThemeToggle;

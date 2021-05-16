import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/main.scss';
import { ThemeProvider } from './contexts/ThemeContext';

import Landing from './pages/Landing';
import Recipe from './pages/Recipe';
import Auth from './pages/Auth';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <Route exact path="/" component={Landing} />
          <Route exact path="/recipes" component={Recipe} />
          <Route exact path="/auth" component={Auth} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

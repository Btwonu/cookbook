import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/main.scss';
import { ThemeProvider } from './contexts/ThemeContext';
import axios from 'axios';

import Landing from './pages/Landing';
import Recipe from './pages/Recipe';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import RecipeDetails from './components/RecipeDetails';

if (process.env.NODE_ENV === 'development') {
  console.log(process.env.NODE_ENV);
  axios.defaults.baseURL = 'http://localhost:5000';
} else if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);

  // axios.defaults.baseURL =
  // 'https://europe-west1-movie-find-dev.cloudfunctions.net/api';
}

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider>
          <Route exact path="/" component={Landing} />
          <Route exact path="/recipes" component={Recipe} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/recipes/create" component={CreateRecipe} />
          <Route exact path="/recipes/one" component={RecipeDetails} />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

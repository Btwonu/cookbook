import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import Landing from './pages/Landing';
import Recipes from './pages/Recipes';
import Auth from './pages/Auth';
import CreateRecipe from './pages/CreateRecipe';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

import RecipeDetails from './components/RecipeDetails';

export const AuthenticatedRoutes = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/create" component={CreateRecipe} />
          <Route exact path="/recipes/one" component={RecipeDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={Recipes} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export const UnauthenticatedRoutes = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/auth" component={Auth} />
          <Route component={Auth} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

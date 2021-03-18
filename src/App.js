// Base
import { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './css/App.css';
import './css/main.scss';

// Services
import service from './services/recipeService';

// Components
import Container from './components/Container/Container';
import Card from './components/Card/Card';
import Category from './components/Category/Category';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    service.getAll().then((recipes) => {
      const lunchRecipes = recipes.filter((r) => r.category == 'lunch');
      const breakfastRecipes = recipes.filter((r) => r.category == 'breakfast');
      const desertRecipes = recipes.filter((r) => r.category == 'desert');

      this.setState({
        lunchRecipes,
        breakfastRecipes,
        desertRecipes,
      });
    });
  }

  render() {
    return (
      <Container>
        <Category name="Breakfast">
          {this.state.breakfastRecipes?.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              createdAt={recipe.createdAt}
              chef={recipe.chef}
              category={recipe.category}
            />
          ))}
        </Category>

        <Category name="Lunch">
          {this.state.lunchRecipes?.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              createdAt={recipe.createdAt}
              chef={recipe.chef}
              category={recipe.category}
            />
          ))}
        </Category>
        <Category name="Desert">
          {this.state.desertRecipes?.map((recipe) => (
            <Card
              key={recipe.id}
              title={recipe.title}
              image={recipe.image}
              createdAt={recipe.createdAt}
              chef={recipe.chef}
              category={recipe.category}
            />
          ))}
        </Category>
      </Container>
    );
  }
}

export default App;

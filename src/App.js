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
    service.getAll().then((recipes) => this.setState({ recipes }));
  }

  render() {
    return (
      <Container>
        <Category name="Breakfast">
          {this.state.recipes?.map((recipe) => (
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

        <Category name="Lunch"></Category>
      </Container>
    );
  }
}

export default App;

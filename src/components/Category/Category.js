import React, { Component } from 'react';

export class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <section>
        <h4>{this.props.name}</h4>
        <div className="divider" />
        <main className="row">{this.props.children}</main>
      </section>
    );
  }
}

export default Category;

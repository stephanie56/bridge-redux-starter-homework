import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addProduct, removeProduct, submitForm, updateProduct} from './actions/index';
import Chance from 'chance';

import { Form } from './components/Form';
import { Product } from './components/Product';

export const chance = Chance();


const DaBest = ({name}) => <h1>The Best: {name}</h1>;

const AdderButton = ({add}) => <button onClick={() => add({name: 'Sofa'})}>Add Sofa</button>;

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.add({
      id: chance.guid(),
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });
  }

  render() {
    const {productList, add, remove, whoIsTheBest} = this.props;
    debugger;
    return (
      <div>
        <DaBest name={whoIsTheBest}/>
        {productList.map(product => <Product key={product.id} remove={remove} {...product}/>)}

        <AdderButton {...this.props} />
        <hr />
        <Form {...this.props}/>
      </div>
    );
  }
}


// React x REDUX STUFF

const mapStateToProps = state => {
  return {
    productList: state.products.productList,
    whoIsTheBest: 'Della',

    // an example of how to derive state in the mapStateToProps function - this is a specific 'subset' of the full list
    lowStockProducts: state.products.productList.filter(prod => prod.stock && prod.stock < 4),
  }
};

const mapDispatchToProps = {
  add: addProduct,
  remove: removeProduct,
  submitForm,
  updateProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

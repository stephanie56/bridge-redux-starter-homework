import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addProduct, removeProduct, submitForm, updateName, updateType, updatePrice, updateStock, updateDepartment} from './actions/index';
import Chance from 'chance';

export const chance = Chance();

const Product = ({id, name, remove}) => {
  debugger;
  return (
    <div>
      {name}
      <button onClick={() => remove(id)}>Delete Product</button>
    </div>
  );
};

const DaBest = ({name}) => <h1>The Best: {name}</h1>;

const AdderButton = ({add}) => <button onClick={() => add({name: 'Sofa'})}>Add Sofa</button>;

const Form = ({submitForm, updateName, updateDepartment, updateType, updateStock, updatePrice}) => {
  return (
    <div>
      <div>name: <input type="text" onChange={(e) => updateName(e.target.value)}/></div>
      <div>department: <input type="text" onChange={(e) => updateName(e.target.value)}/></div>
      <div>price: <input type="text" onChange={(e) => updateName(e.target.value)}/></div>
      <div>stock: <input type="text" onChange={(e) => updateName(e.target.value)}/></div>
      <div>type: <input type="text" onChange={(e) => updateName(e.target.value)}/></div>
      <button onClick={() => submitForm()}>Submit Product</button>
    </div>
  )
};

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
        {productList.map(product => <Product name={product.name} key={product.id} id={product.id} remove={remove}/>)}

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
  updateName,
  updateType,
  updatePrice,
  updateStock,
  updateDepartment
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

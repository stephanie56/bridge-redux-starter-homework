import { ACTION_TYPES } from '../actions';
import { products } from './index';

  it('adds a product on ADD_PRODUCT', () => {
    const intialState = {
      productList: []
    };
    const action = {
      type: ACTION_TYPES.addProduct,
      payload: {
        product: {
          name: 'Sofa',
        }
      }
    };
    expect(products(intialState, action).productList).toEqual([{name: 'Sofa'}]);
  });

  it('remove a product on REMOVE_PRODUCT', () => {
    const intialState = {
      productList: [{
        id: '123',
        name: 'table',
      }]
    };
    const action = {
      type: ACTION_TYPES.removeProduct,
      payload: '123'
    };
    expect(products(intialState, action).productList).toEqual([]);
  });

  it('add a product through Form on SUBMIT_FORM', () => {
    const intialState = {
      productList: [],
      product: {
        name: 'table'
      }
    }
    const action = {
        type: ACTION_TYPES.submitForm
      };
    expect(products(intialState, action).productList).toEqual([{name: 'table'}]);
  });

  it('update product info on UPDATE_PRODUCT', () => {
    const initialState = {
      product: {
        name: ''
      }
    };
    const action = {
      type: ACTION_TYPES.updateProduct,
      label: 'name',
      val: 'table'
    };
    expect(products(initialState, action).product.name).toEqual('table');
  });

  it('update search term on UPDATE_SEARCHTERM', () => {
    const action = {
      type: ACTION_TYPES.updateSearchTerm,
      payload: 'chair'
    };
    expect(products({searchTerm: ''}, action).searchTerm).toEqual('chair');
  });

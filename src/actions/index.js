export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
  removeProduct: 'REMOVE_PRODUCTS',
  submitForm: 'SUBMIT_FORM',
  updateName: 'UPDATE_NAME',
  updateDepartment: 'UPDATE_DEPARTMENT',
  updatePrice: 'UPDATE_PRICE',
  updateStock: 'UPDATE_STOCK',
  updateType: 'UPDATE_TYPE',
};

export function addProduct(product) {
  return {
    type: ACTION_TYPES.addProduct,
    payload: {
      product,
    }
  }
}

export function removeProduct(productId) {
  return {
    type: ACTION_TYPES.removeProduct,
    payload: productId
  }
}

export function submitForm() {
  return {
    type: ACTION_TYPES.submitForm
  }
}

export function updateName(val) {
  return {
    type: ACTION_TYPES.updateName,
    payload: val
  }
}

export function updateDepartment(val) {
  return {
    type: ACTION_TYPES.updateDepartment,
    payload: val
  }
}

export function updatePrice(val) {
  return {
    type: ACTION_TYPES.updatePrice,
    payload: val
  }
}

export function updateStock(val) {
  return {
    type: ACTION_TYPES.updateStock,
    payload: val
  }
}

export function updateType(val) {
  return {
    type: ACTION_TYPES.updateType,
    payload: val
  }
}

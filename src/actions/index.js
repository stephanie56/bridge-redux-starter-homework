export const ACTION_TYPES = {
  addProduct: 'ADD_PRODUCTS',
  removeProduct: 'REMOVE_PRODUCTS',
  submitForm: 'SUBMIT_FORM',
  updateProduct: 'UPDATE_PRODUCT',
  updateSearchTerm: 'UPDATE_SEARCHTERM'
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

export function updateProduct(label, val) {
  return {
    type: ACTION_TYPES.updateProduct,
    label,
    val
  }
}

export function updateSearchTerm(term) {
  return {
    type: ACTION_TYPES.updateSearchTerm,
    payload: term
  }
}

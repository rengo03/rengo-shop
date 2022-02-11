// State-ul initial al cart-ului.
export const initialState = {
  // Initial nu avem produse in cart.
  products: [],
};
export function cartReducer(state, action) {
  // Evaluam tipurile actiunii:
  switch (action.type) {
    case "ADD_TO_CART": {
      // Din state extragem produsele anterioare.
      const previousProducts = state.products;
      // Din actiune extragem produsul adaugat.
      const newProduct = action.payload;
      // Generam noul state.
      const newState = {
        // Atentie! Nu avem voie sa modificam state-ul primit ca parametru.
        products: [...previousProducts, newProduct],
      };
      console.log(newState);
      // Returnam noul state.
      return newState;
    }

    case "REMOVE_FROM_CART": {
      // Din state extragem produsele anterioare.
      const previousProducts = state.products;
      const productId = action.payload;
      const filteredProducts = previousProducts.filter((product) => {
        return product.id !== productId;
      });
      const newState = {
        products: filteredProducts,
      };
      return newState;
    }
    // Nu uitam sa returnam state-ul pe cazul default

    default:
      return state;
  }
}

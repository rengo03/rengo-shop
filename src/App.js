// Importam componentele ce tin de rutare.
import { Route, Switch } from "react-router-dom";
// Importam paginile.
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import ProductsCategory from "./pages/ProductsCategory";
import ProductDetails from "./pages/ProductDetails";
// Importam ce tine de state management.
import { useReducer } from "react";
import { FavoritesContext } from "./Store/Favorites/context";
import {
  initialState as favInitialState,
  favoritesReducer,
} from "./Store/Favorites/reducer";
import { CartContext } from "./Store/Cart/context";
import {
  cartReducer,
  initialState as cartInitialState,
} from "./Store/Cart/reducer";

function App() {
  // Initializam reducerul pentru produse favorite.
  const [favoritesState, favoritesDispatch] = useReducer(
    favoritesReducer,
    favInitialState
  );
  // Cream obiectul ce va fi pasat ca valoare contextului.
  const favoritesContextValue = {
    favoritesState,
    favoritesDispatch,
  };

  // Initializam reducerul pentru produse din cart.
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  // Cream obiectul ce va fi pasat ca valoare contextului.
  const cartContextValue = {
    cartState,
    cartDispatch,
  };
  return (
    <div className="App">
      <CartContext.Provider value={cartContextValue}>
        <FavoritesContext.Provider value={favoritesContextValue}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/category/:categoryId">
              <ProductsCategory />
            </Route>
            <Route path="/product/:productId*">
              <ProductDetails />
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
        </FavoritesContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;

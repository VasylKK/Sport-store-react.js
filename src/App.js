import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import PersonalAccount from './components/PersonalAccount';
import Contact from './components/Contact'
import { Redirect, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout'
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';

function App() {

  return (
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/PersonalAccount" component={PersonalAccount} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
      <ToastContainer />
    </>
  );
}

export default App;

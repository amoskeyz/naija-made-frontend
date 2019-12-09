import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, withRouter } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import Home from '../views/Home';
import Register from '../views/Register';
import Product from '../views/Item';
import Carts from '../views/Carts'
import UploadProduct from '../views/UploadProduct'
// import Login from '../views/Login';
// import Item from '../views/Item';
// import Section from '../components/NavSec/index.jsx'


const app = () => (
  <Fragment>
    {/* <NavBar history={history} /> */}
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Register} />
    <Route path="/product/:product_id" component={Product} />
    <Route path="/carts" component={Carts} />
    <Route path = '/add_product' component = {UploadProduct} />
  </Fragment>
);

const AppWithRouter = withRouter(app);

const Routes = () => (
  <Router>
    <AppWithRouter />
  </Router>
);

export default Routes;

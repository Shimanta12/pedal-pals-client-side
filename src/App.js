import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import Menubar from './Pages/Shared/Menubar/Menubar';
import AuthProvider from './context/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import Bicycles from './Pages/Bicycles/Bicycles';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Menubar />
              <Home />
              <Footer />
            </Route>
            <Route path="/home">
              <Menubar />
              <Home />
              <Footer />
            </Route>
            <Route path="/login">
              <Menubar />
              <Login />
              <Footer />
            </Route>
            <Route path="/register">
              <Menubar />
              <Register />
              <Footer />
            </Route>
            <Route path="/bycycles">
              <Menubar />
              <Bicycles />
              <Footer />
            </Route>
            <PrivateRoute path="/product/:id">
              <Menubar />
              <ProductDetails />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route path="*">
              <Menubar />
              <NotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

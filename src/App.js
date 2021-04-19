import React, { createContext, useState } from "react";
import './App.css';
import Home from './components/Home/Home';
import LogIn from "./components/LoginPage/LogIn";
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/DashBoard';
import CustomerOrderedList from './components/Dashboard/CustomerOrderList/CustomerOrderedList';
import CheckOutOrder from "./components/Dashboard/CheckOutOrder/CheckOutOrder";
import AddCustomerReview from './components/Dashboard/AddCustomerReview/AddCustomerReview';
import AdminOrderList from "./components/Dashboard/Admin.OrderList/Orderlist";
import AdminAddService from './components/Dashboard/Admin.AddService/AddService';
import AdminMakeAdmin from "./components/Dashboard/Admin.MakeAdmin/MakeAdmin";
import AdminManageServices from "./components/Dashboard/Admin.ManageServices/ManageServices";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export const UserContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
        <Router>
          <Switch>
            <Route path="/home" >
              <Home></Home>
            </Route>
            <Route path="/Login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/checkOutOrder/:id">
              <CheckOutOrder></CheckOutOrder>
            </PrivateRoute>
            <PrivateRoute  path="/checkOutOrder">
              <CheckOutOrder></CheckOutOrder>
            </PrivateRoute>
            <PrivateRoute  path="/customerOrderList">
              <CustomerOrderedList></CustomerOrderedList>
            </PrivateRoute>
            <PrivateRoute  path="/addCustomerReview">
              <AddCustomerReview></AddCustomerReview>
            </PrivateRoute>
            <PrivateRoute  path="/manageOrder">
              <AdminOrderList></AdminOrderList>
            </PrivateRoute>
            <PrivateRoute  path="/addService">
              <AdminAddService></AdminAddService>
            </PrivateRoute>
            <PrivateRoute  path="/makeAdmin">
              <AdminMakeAdmin></AdminMakeAdmin>
            </PrivateRoute>
            <PrivateRoute  path="/manageServices">
              <AdminManageServices></AdminManageServices>
            </PrivateRoute>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

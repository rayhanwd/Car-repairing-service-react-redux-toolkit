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
import UnAuthUserPage from "./components/404Page/404Page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export const UserContext = createContext();
export const AdminContext = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [loggedAdmin, setAdmin] = useState(false);
  return (
    <div className="App">
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
        <AdminContext.Provider value={[loggedAdmin, setAdmin]}>
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
              <PrivateRoute path="/checkOutOrder">
              <CheckOutOrder></CheckOutOrder>
              </PrivateRoute>
              <PrivateRoute path="/customerOrderList">
              <CustomerOrderedList></CustomerOrderedList>
              </PrivateRoute>
              <PrivateRoute path="/addCustomerReview">
              <AddCustomerReview></AddCustomerReview>
              </PrivateRoute>
              {loggedAdmin &&
              <PrivateRoute path="/manageOrder">
              <AdminOrderList></AdminOrderList>
              </PrivateRoute>}
              {loggedAdmin &&
              <PrivateRoute path="/addService">
              <AdminAddService></AdminAddService>
              </PrivateRoute>}
              {loggedAdmin&&
              <PrivateRoute path="/makeAdmin">
                <AdminMakeAdmin></AdminMakeAdmin>
              </PrivateRoute>
              }
              {loggedAdmin &&
                <PrivateRoute path="/manageServices">
                  <AdminManageServices></AdminManageServices>
                </PrivateRoute>
              }
              <Route path="/">
                <Home></Home>
              </Route>
              <Route path="*"> 
              <UnAuthUserPage></UnAuthUserPage>
              </Route>
            </Switch>
          </Router>
        </AdminContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

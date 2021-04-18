import React, { createContext, useState } from "react";
import './App.css';
import Home from './components/Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Admin from "./components/Admin/Admin";
import Dashboard from './components/Dashboard/Dashboard';
import LogIn from "./components/LoginPage/LogIn";
import YourOrderedList from './components/Dashboard/YourOrderedList';
import OrderList from './components/Admin/Orderlist/Orderlist';
import Review from "./components/Dashboard/Review";
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import SubmitOrder from "./components/Dashboard/SubmitOrder";
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
         <PrivateRoute path="/SubmitOrder/:id">
         <SubmitOrder></SubmitOrder>
         </PrivateRoute>
         <PrivateRoute path="/SubmitOrder">
         <SubmitOrder></SubmitOrder>
         </PrivateRoute>
         <PrivateRoute path="/YourOrderedList">
         <YourOrderedList></YourOrderedList>
         </PrivateRoute>
         <PrivateRoute path="/WriteReview">
         <Review></Review>
         </PrivateRoute>
         <PrivateRoute path="/admin">
         <Admin></Admin>
         </PrivateRoute>
         <PrivateRoute path="/orderlist">
         <OrderList></OrderList>
         </PrivateRoute>
         <PrivateRoute path="/addService">
         <AddService></AddService>
         </PrivateRoute>
         <PrivateRoute path="/makeAdmin">
         <MakeAdmin></MakeAdmin>
         </PrivateRoute>
         <PrivateRoute path="/manageServices">
         <ManageServices></ManageServices>
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

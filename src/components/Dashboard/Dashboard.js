
import React, {useContext, useEffect} from 'react';
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';
import {AdminContext, UserContext } from './../../App';
const Dashboard = () => {
 
  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const [loggedAdmin, setAdmin] =useContext(AdminContext);
 

  useEffect(() => {
      fetch('https://whispering-falls-52253.herokuapp.com/findAdmin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: loggedUser.email })
      })
          .then((res) => res.json())
          .then((data) => 
        
          setAdmin(data)
          )
  }, [])

  return (
    <>
      <TopBar></TopBar>
      <div className="container-fluid">
        <div className="row">
        <SideBar></SideBar>
        <div class="col-md-9">
        <h4 className="text-center mt-5">Welcome Dashboard</h4>
        </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
import React,{useState, useEffect} from 'react';
import Admin from './Admin';
const AdminCheck = () => {
    let redirectToUrl;

    const [pd, setpd] = useState([]);

    useEffect(() => {
     
      fetch(`http://localhost:3000/findAdmin`)
          .then(res => res.json())
          .then(GetManageData => setServices(GetManageData))
  }, [])
    return (
        <div>
         
    if ( loggedUser.email===email ) 
    {
      redirectToUrl = <Redirect to={Admin}/>
    }   
        </div>
    );
};

export default AdminCheck;
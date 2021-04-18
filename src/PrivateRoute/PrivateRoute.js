import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './../App';
const PrivateRoute = ({children, ...rest}) => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
     (loggedUser.email || sessionStorage.getItem('token'))  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;
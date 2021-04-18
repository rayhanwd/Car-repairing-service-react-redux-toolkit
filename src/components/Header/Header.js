import React from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Banner from './Banner/Banner';

const Header = () => {
  return (
    <div style={{backgroundImage:'linear-gradient(#C90B72, #001C74)' ,backgroundColor:'#001C74', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
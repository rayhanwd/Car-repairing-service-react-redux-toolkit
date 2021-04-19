import React from 'react';

import Banner from './Banner/Banner';
import NavigationBar from './NavigationBar/NavigationBar';

const Header = () => {
  return (
    <div style={{backgroundImage:'linear-gradient(#C90B72, #001C74)' ,backgroundColor:'#001C74', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
    <NavigationBar></NavigationBar>
      <Banner></Banner>
    </div>
  );
};

export default Header;
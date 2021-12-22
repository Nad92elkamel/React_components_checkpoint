import logo from './logo.svg';
import React from 'react';
import './App.css';
import FullName from './comp/profile/FullName';
import Address from './comp/profile/Address';
import PhotoProfile from './comp/profile/ProfilePhoto';

const App = () => (
    <div>
      <PhotoProfile/>
      <FullName/>
      <Address/>
    </div>
  )
export default App;

import React from 'react';
// import logo from './img/logo.svg';
import './Home.css';
import Header from './components/header';
import Container from './components/container';

import Threats from './components/threats';


export default function Home() {
  return (
      <div>
        <Header />
        <Container />
        <Threats />
      </div>
  );
}

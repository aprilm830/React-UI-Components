import React from 'react';
import './App.css';
import CardBanner from './components/CardComponents/CardBanner';
import CardContainer from './components/CardComponents/CardContainer';
import CardContent from './components/CardComponents/CardContent'
import HeaderContainer from './components/HeaderComponents/HeaderContainer';

const App = () => {
  return (
    <div>
      <CardBanner />
      <CardContainer />
      <CardContent />
      <HeaderContainer />
      
    </div>
  );
};

export default App;

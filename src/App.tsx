import React from 'react';
import Menu from './components/menu/Menu'
import Slider from './components/slider/Slider'
import Card from './components/cardPresentation/Card';
import Tools from './components/tools/Tools';


const App: React.FC = () => {
  return (
    <div>
      <Menu/>
      <Slider />
      <Card />
      <Tools />
    </div>
  );
}

export default App;

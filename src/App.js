import './App.css';
import React from 'react';
import Header from './Component/Header/Header';
import HeaderMobile from './Component/Header/HeaderMobile';
import IntroductionMobile from './Component/Introduction/IntroductionMobile';

function App() {
  const [change,setChange] = React.useState(false);
  const [screen,setScreen] = React.useState({
    y : window.screen.width,
    x : window.screen.height
  });

  React.useEffect(function() {
    window.addEventListener('resize', function(){
      setScreen({ y : window.screen.width, x : window.screen.height});
    });
  },[change,setChange])

  return (
    <div>
        {screen.y > 800 ? <Header></Header> : ""}
        {screen.y > 800 ? "" : <IntroductionMobile></IntroductionMobile>}
        {screen.y < 800 ? <HeaderMobile></HeaderMobile> : ""}
    </div>
  );
}

export default App;

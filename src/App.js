import './css/App.css';
import React from 'react';
//Add-ons-Libraries
import { useMediaQuery } from "react-responsive";
//components
import MainHeaderComponent from './main-header-component/MainHeaderComponent';
import MainSectionsComponent from './mainbodysectionscomponent/MainSectionsComponent';
import MainFooterComponent from './main-footer-component/MainFooterComponent';


function App() 
{
  //Medi Query for responsive desing
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  //Get all the media querys into an Array
  const TypeOfDevice = [isBigScreen, isDesktopOrLaptop, isTabletOrMobile, isPortrait, isRetina];

  return (
    <React.Fragment>
      <MainHeaderComponent typeofd={TypeOfDevice}/>
      <MainSectionsComponent device={TypeOfDevice}/>
      <MainFooterComponent/>
    </React.Fragment>
  );
}

export default App;

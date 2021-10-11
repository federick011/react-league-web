import React from "react";
//animations
import { motion } from "framer-motion";
//Components
import MenuListItems from "./MenuListItems";

//Styles
import './css/MainHeaderStyle.css'

//Images
import {Icon01, Icon02} from './images/ImagesMang'

//Props => [0]=isBigScreen, [1]=isDesktopOrLaptop, [2]=isTabletOrMobile, [3]=isPortrait, [4]=isRetina
export default function MainHeaderComponent({typeofd})
{
    return(
        <header className="main-header">
            <motion.div initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.6}} className="main-nav">
                <div className="menu-items">
                    <div className="main-menu-icons">
                        <img className="menu-icon" src={Icon01}/>
                        <div className="line-inb"/>
                        <img className="menu-icon" src={Icon02}/>
                        <MenuListItems screenSize={typeofd}/>
                    </div>
                    
                </div> 
            </motion.div>
        </header>
    );
}
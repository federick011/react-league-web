import React from "react";
import { useState } from 'react';
//Images
import {IconItems} from './images/ImagesMang'
//animations
import { motion } from "framer-motion"


//screenSize => [0]=isBigScreen, [1]=isDesktopOrLaptop, [2]=isTabletOrMobile, [3]=isPortrait, [4]=isRetina
export default function MenuListItems({screenSize})
{
    //To show a hide menu
    const [isShowMenuH, setIsShowMenuH] = useState(false);
    function ShowMenu()
    {
        setIsShowMenuH(!isShowMenuH);
    }
    
    //Array Menu Items
    const List = ["GAME", "CHAMPIONS", "NEWS", 
                    "PATCH NOTES", "ESPORTS", 
                    "UNIVERSE", "SHOP", "SUPPORT"];
    
    const ListCont = List.map((item, index) => {
        return(
            <div className="items-menu" key={index}>
                <li>
                    <a href="#">
                        {item}
                    </a>
                </li>
            </div>
        ); 
    });

    //For mobiles
    const ListContMobile = List.map((item, index) => {
        return(
            <div className="items-menu-mobile" key={index}>
                <li >
                    <a href="#"> 
                        {item}
                    </a>
                </li>
            </div>
        ); 
    });

    //Anim properties
    const VarAnim = {
        visible:{ x: 1, opacity:1, scale:1 },
        hidden: { x: 200,opacity:0, scale:0 }
    };

    //this menu is for the responsive desing
    const hambuMenu = (<motion.div initial="hidden" animate="visible" variants={VarAnim}
                        className="content-ul-menu-mobile">
                        <div>
                            {ListContMobile}
                        </div>
                    </motion.div>
    );

    const TypeOfMenu = [
        (<div className="content-items-list">
            <div>
                {ListCont}
            </div>
        </div>),
        //If mobile show the png menu
        (<div className="content-items-list-mobile">
            <img onClick={ShowMenu} src={IconItems}></img>
            {/*To show de Hamb Menu*/}
            {((isShowMenuH) && hambuMenu)}
        </div>)
    ];

    return(
        /*if this is not a portrit or small width screen size*/
        <React.Fragment> 
            {((!screenSize[2] && !screenSize[3]) && TypeOfMenu[0])}
            {((screenSize[2] || screenSize[3]) && TypeOfMenu[1])}
        </React.Fragment> 
    );
}
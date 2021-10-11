import React, { useState } from "react";
//import images
import {jinxImgSection, linkEdin, gitHubLogo}  from "./images/ManageImages";
//animations
import { motion } from "framer-motion";

//typeofdevice => [0]=isBigScreen, [1]=isDesktopOrLaptop, [2]=isTabletOrMobile, [3]=isPortrait, [4]=isRetina
export default function SubMobileSection({typeofdevice})
{
    const contIfDesk = () => {
        
    };
    const VarAnim = {
        hidden: {x:-100, opacity:0},
        visible: {x:0, opacity:1} 
    };
    return(
        <section  className="sub-section-one">
            <div className="main-div">
                <div className="sub-main-div-mobile">
                    
                    <motion.div initial="hidden" animate="visible" transition={{duration: 4, type: "spring", delay:0.5}}
                                variants={VarAnim} className="charac-content-mobile">
                        <div className="info-div-mobile">
                            <div  className="sub-info-div-mobile">
                                <h3>Hi!, I'm Federick Turizo.</h3>
                                    <p>I am a front-end web developer and game developer.</p>
                                    <p/>
                                <p> You can reach me on</p>
                                <span>
                                        <a href="https://www.linkedin.com/in/federick-turizo-martinez-713326168/"
                                        target="_blank" rel="noopener noreferrer"><img src={linkEdin} /></a>
                                        <a href="https://github.com/federick011/react-league-web"
                                        target="_blank" rel="noopener noreferrer"><img src={gitHubLogo} /></a>
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    
                    
                </div>
            </div>
        </section>
    );
}
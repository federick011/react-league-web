import React, { useState } from "react";
//Sub Components
import SubMainSectionOne from "./SubMainSectionOne";
import SubMobileSection from "./SubMobileSection";
//Styles
import './css/MainSectionStyle.css'


//device => [0]=isBigScreen, [1]=isDesktopOrLaptop, [2]=isTabletOrMobile, [3]=isPortrait, [4]=isRetina
export default function MainSectionsComponent({device})
{
    //To change the ClassName of <main>
    const [isMobileNow, setIsMobileNow] = useState("main-body-sections");
    if(!device[2] && !device[3])
    {  
        if(isMobileNow !== "main-body-sections")
            setIsMobileNow("main-body-sections");
    }
    else if(device[2] || device[3])
    {
        if(isMobileNow !== "main-body-sections-mobile")
            setIsMobileNow("main-body-sections-mobile");
    }
    return(
        <main className={isMobileNow}>
            {(!device[2] && !device[3]) && <SubMainSectionOne typeofdevice={device}></SubMainSectionOne>}
            {(device[2] || device[3]) && <SubMobileSection typeofdevice={device}></SubMobileSection>}
        </main>
    );
}
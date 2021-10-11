import React from "react";
//Style
import './css/FooterStyle.css'

export default function MainFooterComponent()
{
    return(
        <footer className="footer-content">
            
            <div className="main-footer-content">
                <div className="text-content">

                    This site was developed By <span>
                        <a href="https://www.linkedin.com/in/federick-turizo-martinez-713326168/" target="_blank">
                            Federick Turizo
                        </a>
                    </span> and the design was inspired By <span>
                        <a href="https://www.figma.com/@UnEpicKid" target="_blank"> Dmitry Kiiashko.</a>
                    </span>
                    <p/>
                    League of Legends.

                </div>
            </div>
        </footer>
    );
}
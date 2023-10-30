import React from "react";
import ReactDom from "react-dom/client";
import Headerlogo from"./HeaderComponent/Headerlogo";
import Navitems from"./HeaderComponent/Navitems";
import Cards from "./HeaderComponent/Cards";
import Footer from "./HeaderComponent/Footer";
import Sidebar from "./HeaderComponent/Sidebar";

var htmlRoot = document.getElementById("root");
var rootReact = ReactDom.createRoot(htmlRoot);






const AppLayout=()=>{
    return(
        <div className="AppLayout">
            <div className="Header"> 
            <Headerlogo/>
            <Navitems/>
            </div>
           
            <Cards/>
            <Footer/>
        </div>
    )
}
rootReact.render(<AppLayout/>)
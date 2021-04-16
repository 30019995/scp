import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

class Main extends Component
{
    render()
    {
        return(
            <div >
                <Header/>
                <Content/>
                <Footer/>
                
            </div>
        );
    }
}

export default Main;
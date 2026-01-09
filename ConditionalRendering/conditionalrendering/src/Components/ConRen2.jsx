import React from "react";

export class ConRen2 extends React.Component{
    constructor(){
        super();
        this.state={
            ismorning : true
        }
    }

    render(){
        return(
            <>
            { this.state.ismorning ? "Good Morning" : "Good Evening" }
     
            </>
        )
    }
}
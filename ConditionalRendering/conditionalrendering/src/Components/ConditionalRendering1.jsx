import React from "react";
export class ConditionalRendering1 extends React.Component{
    constructor(){
        super();
        this.state = {
            isloggedIn : true
        }
    }

    render(){
        if(this.state.isloggedIn){
            return <h1>Logged in Successfully</h1>
        }
        else{
            return <h1>Something Error pls try Again</h1>
        }
    }
}
import React from "react";

export class ConStyle1 extends React.Component{
    constructor(){
        super();

        this.state={
            hadLunch : false
        }
    }

    render(){
        return(
            <>
            {
                // this.state.hadLunch && <p style={{color:this.state.hadLunch ? "blue" : "red"}}>Healthy</p>
                this.state.hadLunch ? <p style={{color:this.state.hadLunch? "Green" : "Red"}}>Healthy</p> : <p style={{color:this.state.hadLunch? "Green" : "Red"}}>Unhealthy</p>
            }

            
            </>
        )
    }

}
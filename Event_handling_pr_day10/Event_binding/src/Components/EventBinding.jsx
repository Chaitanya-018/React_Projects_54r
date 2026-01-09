import React from "react";

export class EventBinding extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "Durga",
            gf : "Parameshwari"
        }
    }
    // passing arrow function as class property -->3
    newgf = ()=>{         
        console.log(this);
        this.setState({name:"Uppal_Balu"})
    }
    // passing arrow function as class property -->3
    oldgf = ()=>{
        this.setState({name:"Durga"})
    }

    naveengf(){
        this.setState({
            gf:"lakshmi"
        })
    }
    render(){
        return(
            <>
            <h1>Venki girlfriend name is : {this.state.name}</h1>
            {/* passing arrow function as class property -3*/}
            <button onClick={this.newgf}>New Girlfriend</button>
            <button onClick={this.oldgf}>Old GirlFriend</button><br></br>

            <h1>Naveen Girlfriend : {this.state.gf}</h1>

            {/* arrow function in render method but in button only we setstate name-2 */}
            {/* <button onClick={()=>{this.setState({gf:"Parvathi"})}}>Second Girlfriend</button> */}

            {/* inline binding method-4 */}
            <button onClick={this.naveengf.bind(this)}>Second Girlfriend</button>
            </>
        )
    }
}
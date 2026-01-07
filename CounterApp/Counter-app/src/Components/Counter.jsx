import React from "react";

export default class CounterApp extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
        
    }

    increment = ()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = ()=>{
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = ()=>{
        this.setState({
            count : 0
        })
    }

    render(){
        return(
            <>
            <div style={{
                textAlign:"center",
                background:"linear-gradient(135deg,#4e73df,#1cc7d0)",
                color:"#ffffff",
                width:"360px",
                minHeight:"190px",
                padding:"18px",
                margin:"120px auto",
                borderRadius:"18px",
                boxShadow:"0 18px 35px rgba(0,0,0,0.25)"
            }}>
                
                <h1 style={{marginBottom:"15px"}}>
                    Counter : {this.state.count}
                </h1>

                <button 
                    onClick={this.increment}
                    style={{
                        border:"none",
                        borderRadius:"10px",
                        margin:"10px",
                        padding:"10px 18px",
                        fontWeight:"600",
                        backgroundColor:"#3cff7c",
                        boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
                        cursor:"pointer"
                    }}
                >
                    Increment
                </button>

                <button 
                    onClick={this.decrement}
                    style={{
                        border:"none",
                        borderRadius:"10px",
                        margin:"10px",
                        padding:"10px 18px",
                        fontWeight:"600",
                        backgroundColor:"#ff6b6b",
                        boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
                        cursor:"pointer"
                    }}
                >
                    Decrement
                </button>

                <button 
                    onClick={this.reset}
                    style={{
                        border:"none",
                        borderRadius:"10px",
                        margin:"10px",
                        padding:"10px 18px",
                        fontWeight:"600",
                        backgroundColor:"#6c63ff",
                        color:"#fff",
                        boxShadow:"0 4px 10px rgba(0,0,0,0.2)",
                        cursor:"pointer"
                    }}
                >
                    Reset
                </button>

            </div>
            </>
        )
    }
}

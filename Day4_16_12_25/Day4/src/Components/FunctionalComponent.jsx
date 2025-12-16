import Fun1 from "./Fun1"

function FunctionalComponent(){
    return(
       <div>
        <h1>Hello , this is from functional component</h1>
        <p style={{color:"blue",textAlign:"center",backgroundColor:"yellow"}}>Hii this from functional Component para,with internal styles</p>
        <Fun1/>
       </div>
    )
}

export default FunctionalComponent;
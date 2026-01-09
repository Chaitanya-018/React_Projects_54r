import Child from "./Child";
function Parent(){
    return(
        <>
        <h1 style={{backgroundColor:"orange"}}>This is from Parent component</h1>
        <Child />
        </>
    )
}
export default Parent
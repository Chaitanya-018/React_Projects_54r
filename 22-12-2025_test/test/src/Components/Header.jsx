export default function Header(){
    return(
        <>
        <h1 style={{backgroundColor:"yellow",textAlign:"center"}}>This line is from default export</h1>
        </>
    )
}


export const Footer=()=>{
    return(
        <>
        <h1 style={{backgroundColor:"pink",textAlign:"center"}}>This line is from named export</h1>
        </>
    )
}
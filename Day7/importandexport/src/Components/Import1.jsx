export default function Import1(){
    return(
        <>
        <div style={{backgroundColor:"yellow"}}>
            <h1>Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Sunt, adipisci quas eius inventore 
        provident placeat, delectus sit quod rerum unde 
        ut blanditiis animi ratione fuga dolorum error 
        iure porro minima.</h1>

        <p>Saturday is an weekend</p>

        <Import2/>
        </div>
        
        </>
    )
}

function Import2(){
    return(
        <h2>chaitanya</h2>
    )
}

export function Content1(){  
    return(
        <>
        <h2 style={{backgroundColor:"red",color:"black",textAlign:"center"}}>form content1</h2>

        </>
    )
}

export function Content2(){  
    return(
        <>
        <h2 style={{backgroundColor:"red",color:"black",textAlign:"center"}}>form content1</h2>

        </>
    )
}

export const Box = ()=>{
  return(
    <>
    <p>Varible name always in capital latter only</p>
    <marquee behavior="" direction="" scrollamount="20" style={{backgroundColor:"yellow"}}>Marquee</marquee>
    </>
  )
}


export function Footer(){
    return(
        <>
        <div style={{textAlign:"center",backgroundColor:"lightBlue"}}>
            <h1>From Footer </h1>
            <p>from footer para</p>
        </div>
        </>
    )
}
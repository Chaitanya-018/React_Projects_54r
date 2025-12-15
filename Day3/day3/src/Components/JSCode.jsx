import './JSCode.css'

var person = {
        name:"chaitu",
        age:24,
        city:"Vizag",
        girlfriendstatus:"1"
    }

    var styling = {
        color : "blue",
        backgroundColor : "pink",
        padding : "30px",
        margin: "30px",
        textAlign : "center"
    } 

function JSCode(){
    return(
        <div>
            <h1 className='header1'>Hello Everyone</h1>
            <p className='para1'>{person.name} is {person.age}, staying in {person.city}, gfstatus is {person.girlfriendstatus}, so earely lookimg for Friends</p>

            <div>
                <h2 style={{color:'white',backgroundColor:'purple',textAlign:'center'}}>Today is monday</h2>
                <h3 style={{textAlign:'center',color:'white',backgroundColor:'orange'}}>Tomorrow is Tuesday</h3>
                <div>
                    <p style={styling}>Providing styling in the form of objects</p>
                </div>
            </div>

            

        </div>
    )
}
export default JSCode


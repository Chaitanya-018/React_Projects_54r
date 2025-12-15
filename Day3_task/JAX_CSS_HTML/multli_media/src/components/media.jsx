import vk from "../assets/virat_1.jpg"
import anushka from "../assets/anushka_sharma.jpg"


function Media() {
  return (
    <div>
      <h1>Virat Kohli</h1>
      <img src={vk} width="200" /> <br /><br />
      <h1>Anushka</h1>
      <img src={anushka} width="200" height="200"/>
      
    </div>
  )
}

export default Media;

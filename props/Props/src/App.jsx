import { Props } from "./Components/Props"

import { ChildrenProps } from "./Components/ChildrenProps"

import { Props1 } from "./Components/Props1";

function App() {
    const student = ["53", "Harshitha", "Kadpa", "Maggie"];


  return (
    <>
      {/* <Props eid="1201" ename="Sundra" esalary={25000} edepartment="React Developer" eemail="Sundra@gmail.com" eate={true} eskills={["HTML, CSS, JSON, ReactJS"]}/>
      <Props eid="1202" ename="Sundri" esalary={27000} edepartment="Full Stack Developer" eemail="Sundra143@gmail.com" eate={false} eskills={["Python, SQL, FrontEnd, Django"]}   />
      <Props eid="1202" ename="Sundri" esalary={27000} edepartment="Full Stack Developer" eemail="Sundra143@gmail.com" eate={false} /> */}

      {/* <ChildrenProps name="Sundri" age={99} place="Chicago" salary="20000" skills={["HTML", "CSS", "JS", "ReactJS", "Python", "PDBC", "Django"]}></ChildrenProps>
      <ChildrenProps name="Sundra" age={89} place="Mumbai" salary="19000"><div><h1>Children Props</h1></div></ChildrenProps>
      <ChildrenProps name="Sundri" age={99} place="Chicago"><ChildrenProps name="Sundri" age={99} place="Chicago"></ChildrenProps></ChildrenProps> */}

      <Props1 student = {student}/>
 
    </>
  )
}

export default App

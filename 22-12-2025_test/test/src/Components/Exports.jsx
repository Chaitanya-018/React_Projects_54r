export default function Exports() {
  return (
    <>
      <Header />

      <h1 style={{ color: "blue", textAlign: "center" }}>
        Hello from Default Export
      </h1>
    </>
  );
}

export const Header = () => {
  return (
    <h1 style={{ color: "green", textAlign: "center" }}>
      Hello from Named Export
    </h1>
  );
};

function Footer(){
    return(
        <>
        <h1 style={{ color: "green", textAlign: "center" }}>Hello from Named Export Footer</h1>
        </>
    )
}
export {Footer}
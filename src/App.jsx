import { useLoaderData } from "react-router";

function App() {
  const data = useLoaderData();
  const laptop = data.electronics;
  console.log(laptop)
  return (
    <>
      <p>data: {laptop.length}</p>
      {
        laptop.map(laptop => <div>{laptop.name}</div>)
      }
    </>
  )
}

export default App

import './App.css'

async function App() {
      const res = await fetch('http://localhost:8000/');
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        console.error('Failed to fetch data from the server');
      }

  return (
    <>
    <h1>GearVault</h1>
    <p>data</p>
    </>
  )
}

export default App

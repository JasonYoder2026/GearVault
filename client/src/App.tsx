import './App.css'
import { apiFetch } from './api/client';

async function App() {
      const res = await apiFetch('/');
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

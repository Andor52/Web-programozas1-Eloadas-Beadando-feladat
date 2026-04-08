import { useEffect, useRef, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [hajok, setHajok] = useState([]);
  const [message, setMessage] = useState("");
  const [nev, setNev] = useState("");
  const [varos, setVaros] = useState("");
  const [index, setIndex] = useState(null);
  const api = "/Axios-menü/api.php";

  useEffect(() => {
    hajoValasztas();
  }, []);

const hajoValasztas = async () => {
  const valasz = await axios.get(api);
  setHajok(valasz.data.readData);
  setMessage(a => a+" "+valasz.data.status);
 };

const kuldes = async (e) => {
  e.preventDefault();
  var valasz;
  console.log(nev + " " + varos);
  if (index !== null) {
      valasz = await axios.put(api, { az: index, nev: nev, varos: varos });
      setIndex(null);
    } else {
      valasz = await axios.post(api, { nev: nev, varos: varos });
    }
    setMessage(valasz.data.status);
    setNev("");
    setVaros("");
    hajoValasztas();
  };

const hajoSzerkesztes = (hajo) => {
 setIndex(hajo.az);
 setNev(hajo.nev);
 setVaros(hajo.varos);
 window.scrollTo({
            top: 0,
            behavior: "smooth"
    });
 };

const hajoTorles = async (az) => {
  if (!confirm("Biztosan törölni szeretnéd?")) return;
  const valasz = await axios.delete(api, {data: {az:az}});
  setMessage(valasz.data.status);
  hajoValasztas();
 };


  return (
    <>
       <header>
        <h1>Axios menüs megvalósítás</h1>
    </header>
    
    <main>
      <form onSubmit={kuldes}>
        <h2>Új hajó hozzáadása / szerkesztése</h2>
        <label>Hajó neve</label><br />
        <input placeholder="Hajó neve" value={nev} onChange={(e) => setNev(e.target.value)} required/><br/><br/>
        <label>Város</label><br/>
        <input placeholder="Város" value={varos} onChange={(e) => setVaros(e.target.value)} required/><br/><br/>
        <button type="submit" className="submit">Küldés</button>
        <button type="reset" className="reset" onClick={() => window.location.reload()}>Alaphelyzet</button>
        <p>{message}</p>
      </form>
      <h2>Hajók listája</h2>
      <table>
        <thead>
          <tr>
            <th>Név</th>
            <th>Város</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {hajok.map((hajo, index) => (
            <tr key={index}>
              <td>{hajo.nev}</td>
              <td>{hajo.varos}</td>
              <td>
                <button onClick={() => hajoSzerkesztes(hajo)} className="szerkeszt">Szerkeszt</button>
                <button onClick={() => hajoTorles(hajo.az)} className="torol">Törlés</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
    <footer>Nyikos Diána - CU4KRP || Makai Andor - AKYY5Z</footer>
    </>
  )
}

export default App

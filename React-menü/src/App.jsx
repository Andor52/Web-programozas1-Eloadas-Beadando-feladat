import { useState } from 'react'
import './App.css'

const hajokListaja = [
    {Name: "Balatoni Hajózási Zrt.", Varos: "Siófok"},
    {Name: "3Hajózási Kft.", Varos: "Siófok"},
    {Name: "Balatoni Hajózási Zrt.", Varos: "Balatonfüred"},
    {Name: "Egyéni vállalkozó", Varos: "Siófok"},
    {Name: "Aqua-Sió Vízépítő Kft.", Varos: "Siófok"},
    {Name: "Balatoni Sétahajózási Kft.", Varos: "Keszthely"},
    {Name: "Vízirendőrség", Varos: "Siófok"},
    {Name: "Közép-dunántúli Környezetvédelmi és Vízügyi Igazgatóság", Varos: "Siófok"},
    {Name: "Zánkai GyIC Közhasznú Kft.", Varos: "Zánka"},
    {Name: "Pelsoline Hajózási Kft.", Varos: "Gyenesdiás"},
]

function App() {
  const [hajok, setHajok] = useState(hajokListaja)
  const [name, setName] = useState("")
  const [varos, setVaros] = useState("")
  const [index, setIndex] = useState(null)

  const kuldes = (e) => {
    e.preventDefault()
    if (index === null) {
      setHajok([...hajok, { Name: name, Varos: varos }])
    } else {
      const ujLista = [...hajok]
      ujLista[index] = { Name: name, Varos: varos }
      setHajok(ujLista)
      setIndex(null)
    }
    setName("")
    setVaros("")
  }

  
  const torles = (index) => {
    if (window.confirm("Biztosan törölni szeretnéd?")) {
      setHajok(hajok.filter((_, i) => i !== index));
    }
  };


  const szerekszt = (index) => {
    setName(hajok[index].Name)
    setVaros(hajok[index].Varos)
    setIndex(index)
    
    window.scrollTo({
            top: 0,
            behavior: "smooth"
    });

  }


return (
    <>
     <header>
        <h1>React menüs megvalósítás</h1>
    </header>
  
    <main>
      <form onSubmit={kuldes}>
        <h2>Új hajó hozzáadása / szerkesztése</h2>
        <label>Hajó neve</label><br />
        <input placeholder="Hajó neve" value={name} onChange={(e) => setName(e.target.value)} required/><br/><br/>
        <label>Város</label><br/>
        <input placeholder="Város" value={varos} onChange={(e) => setVaros(e.target.value)} required/><br/><br/>
        <button type="submit" class="submit">Küldés</button>
        <button type="reset" class="reset" onClick={() => window.location.reload()}>Alaphelyzet</button>
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
              <td>{hajo.Name}</td>
              <td>{hajo.Varos}</td>
              <td>
                <button onClick={() => szerekszt(index)} class="szerkeszt">Szerkeszt</button>
                <button onClick={() => torles(index)} class="torol">Törlés</button>
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
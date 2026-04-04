let hajok = [
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
];

var Index = -1;

function megjelenit() {
        const tabla = document.getElementById("tabla");
        tabla.innerHTML = "";
        hajok.forEach((hajo, index) => {
            tabla.innerHTML += `
                <tr>
                    <td>${hajo.Name}</td>
                    <td>${hajo.Varos}</td>
                    <td>
                        <button type="button" onclick="szerkeszt(${index})" class="szerkeszt">Szerkeszt</button>
                        <button type="button" onclick="torol(${index})" class="torol">Töröl</button>
                    </td>
                </tr>
            `;
        });
    }

function addHajo() {
        const Name = document.getElementById("Name").value;
        const Varos = document.getElementById("Varos").value;
        if (Name === "" || Varos === "") {
            alert("Minden mezőt ki kell tölteni!");
            return;
        }
        if (Index === -1) {
            hajok.push({ Name: Name, Varos: Varos });
        } else {
            hajok[Index].Name = Name;
            hajok[Index].Varos = Varos;
            Index = -1;
        }
        document.getElementById("Name").value = "";
        document.getElementById("Varos").value = "";
        megjelenit();
    }

function szerkeszt(index) {
        document.getElementById("Name").value = hajok[index].Name;
        document.getElementById("Varos").value = hajok[index].Varos;
        Index = index;
        
        window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

    }

function torol(index) {
        if (confirm("Biztosan törölni szeretnéd?")) {
            hajok.splice(index, 1);
            megjelenit();
        }
    }

document.getElementById("submit").addEventListener("click", (e) => {e.preventDefault(); addHajo();});

document.addEventListener("DOMContentLoaded", megjelenit);
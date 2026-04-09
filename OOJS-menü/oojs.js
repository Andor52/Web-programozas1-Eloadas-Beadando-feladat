class NyilvantartasiElem {
    constructor(nev, varos) {
        this.nev = nev;
        this.varos = varos;
    }
}

class HajozasiCeg extends NyilvantartasiElem {
    constructor(nev, varos) {
        super(nev, varos);
    }
}

class Hajok {
    constructor() {
        this.lista = [];
        this.szerkesztIndex = null;
    }

    hozzaad(nev, varos) {
        this.lista.push(new HajozasiCeg(nev, varos));
        this.megjelenit();
    }

    torol(index) {
        if (confirm("Biztosan törölni szeretnéd?")) {
            this.lista.splice(index, 1);
        this.megjelenit();
        }
    }

    szerkeszt(index) {
        document.getElementById("Name").value = this.lista[index].nev;
        document.getElementById("Varos").value = this.lista[index].varos;
        this.szerkesztIndex = index;
        window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
    }

    ment(nev, varos) {
        this.lista[this.szerkesztIndex].nev = nev;
        this.lista[this.szerkesztIndex].varos = varos;
        this.szerkesztIndex = null;
        this.megjelenit();
    }

    megjelenit() {
        const tabla = document.getElementById("tabla");
        tabla.innerHTML = "";

        this.lista.forEach((elem, index) => {
            const sor = document.createElement("tr");

            sor.innerHTML = `
                <td>${elem.nev}</td>
                <td>${elem.varos}</td>
                <td>
                    <button onclick="adatbazis.szerkeszt(${index})" class="szerkeszt">Szerkeszt</button>
                    <button onclick="adatbazis.torol(${index})" class="torol">Törlés</button>
                </td>
            `;

            tabla.appendChild(sor);
        });
    }
}

const adatbazis = new Hajok();
const form = document.querySelector("form");
const nevInput = document.getElementById("Name");
const varosInput = document.getElementById("Varos");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nev = nevInput.value.trim();
    const varos = varosInput.value.trim();

    if (nev === "" || varos === "") {
        alert("Minden mezőt ki kell tölteni!");
        return;
    }

    if (adatbazis.szerkesztIndex === null) {
        adatbazis.hozzaad(nev, varos);
    } else {
        adatbazis.ment(nev, varos);
    }

    nevInput.value = "";
    varosInput.value = "";
});

document.getElementById("reset").addEventListener("click", function (e) {
    e.preventDefault();
    location.reload();
});
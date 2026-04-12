class Hajo {
    constructor(kod, nev, tipus, ar1, ar2, ar3) {
        this.kod = kod;
        this.nev = nev;
        this.tipus = tipus;
        this.ar1 = ar1;
        this.ar2 = ar2;
        this.ar3 = ar3;
    }

    arSzamitas(ido) {
        if (ido === 1) return this.ar1;
        if (ido === 2) return this.ar2;
        return ido * this.ar3;
    }
}

class Foglalas extends Hajo {
    constructor(hajo, ido) {
        super(hajo.kod, hajo.nev, hajo.tipus, hajo.ar1, hajo.ar2, hajo.ar3);
        this.ido = ido;
    }

    osszeg() {
        return this.arSzamitas(this.ido);
    }
}

class Flotta {
    constructor() {
        this.hajok = [];
        this.betoltes();
    }

    betoltes() {
        this.hajok.push(new Hajo(8601456, "Jókai", "nosztalgia", 245000, 185000, 140000));
        this.hajok.push(new Hajo(8601247, "Tünde", "nosztalgia", 245000, 185000, 140000));
        this.hajok.push(new Hajo(8601237, "Csobánc", "nosztalgia", 245000, 185000, 140000));
        this.hajok.push(new Hajo(8601303, "Helka", "nosztalgia", 245000, 185000, 140000));
        this.hajok.push(new Hajo(8601238, "Kelén", "nosztalgia", 245000, 185000, 140000));
        this.hajok.push(new Hajo(8601248, "Csongor", "nosztalgia", 245000, 185000, 140000));
        this.hajok.push(new Hajo(8601894, "Balaton", "új katamarán", 405000, 300000, 225000));
        this.hajok.push(new Hajo(8601887, "Tomaj", "új katamarán", 405000, 300000, 225000));
        this.hajok.push(new Hajo(8601751, "Szent Miklós", "személyhajó", 350000, 260000, 225000));
        this.hajok.push(new Hajo(8601807, "Szigliget", "személyhajó", 325000, 245000, 210000));
        this.hajok.push(new Hajo(8601336, "Siófok", "katamarán", 300000, 220000, 185000));
        this.hajok.push(new Hajo(8601340, "Badacsony", "katamarán", 300000, 220000, 185000));
        this.hajok.push(new Hajo(8601344, "Füred", "katamarán", 300000, 220000, 185000));
        this.hajok.push(new Hajo(8601707, "Boglár", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601710, "Fonyód", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601750, "Földvár", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601338, "Lelle", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601308, "Hévíz", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601384, "Aqua Pannonia", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601313, "Keszthely", "személyhajó", 210000, 165000, 140000));
        this.hajok.push(new Hajo(8601277, "Szántód", "új komp", 440000, 380000, 335000));
        this.hajok.push(new Hajo(8601623, "Tihany", "új komp", 440000, 380000, 335000));
        this.hajok.push(new Hajo(8601241, "Széchenyi István", "komp", 325000, 265000, 230000));
        this.hajok.push(new Hajo(8601244, "Kisfaludy Sándor", "komp", 325000, 265000, 230000));
        this.hajok.push(new Hajo(8601317, "Kossuth Lajos", "komp", 325000, 265000, 230000));
        this.hajok.push(new Hajo(8601331, "Baross Gábor", "komp", 325000, 265000, 230000));
    }

    torol() {
        document.getElementById("tartalom").innerHTML = "";
    }

    tablaFejlec() {
        return `
        <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Típus</th>
            <th>1 óra (Ft)</th>
            <th>2 óra (Ft)</th>
            <th>3+ óra (Ft)</th>
        </tr>`;
    }

    tablaMutat() {
        this.torol();
        let html = "<table>";
        html += this.tablaFejlec();

        this.hajok.forEach(h => {
            html += `
            <tr>
                <td>${h.kod}</td>
                <td>${h.nev}</td>
                <td>${h.tipus}</td>
                <td>${h.ar1}</td>
                <td>${h.ar2}</td>
                <td>${h.ar3}</td>
            </tr>`;
        });

        html += "</table>";
        document.getElementById("tartalom").innerHTML = html;
    }

    tervez() {
        const ido = parseInt(prompt("Hány órára?"));
        this.torol();
        let html = "<table>";
        html += `
        <tr>
            <th>ID</th>
            <th>Név</th>
            <th>Összeg (Ft)</th>
        </tr>`;

        this.hajok.forEach(h => {
            html += `
            <tr>
                <td>${h.kod}</td>
                <td>${h.nev}</td>
                <td>${h.arSzamitas(ido)}</td>
            </tr>`;
        });

        html += "</table>";
        document.getElementById("tartalom").innerHTML = html;
    }

    foglal() {
        const kod = parseInt(prompt("Add meg a hajó ID-ját!"));
        const ido = parseInt(prompt("Hány órára?"));
        const hajo = this.hajok.find(h => h.kod === kod);

        if (!hajo) {
            alert("Nincs ilyen hajó!");
            return;
        }

        const f = new Foglalas(hajo, ido);
        this.torol();
        document.getElementById("tartalom").innerHTML = `
        <table>
            <tr>
                <th>ID</th>
                <th>Név</th>
                <th>Óraszám</th>
                <th>Végösszeg (Ft)</th>
            </tr>
            <tr>
                <td>${f.kod}</td>
                <td>${f.nev}</td>
                <td>${f.ido}</td>
                <td>${f.osszeg()}</td>
            </tr>
        </table>`;
    }
}

const flotta = new Flotta();
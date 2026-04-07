const API = "api.php";

document.getElementById("felhasznalo").addEventListener("submit", hajoMentes);

window.onload = function() {
 hajoValasztas();
};

function hajoValasztas() {
 fetch(API)
    .then(res => res.json())
        .then(data => {
        document.getElementById("message").innerText += " "+data.status;
        let rows = "";
        data.readData.forEach(hajo => {
            rows += `
            <tr>
            <td>${hajo.nev}</td>
            <td>${hajo.varos}</td>
            <td>
                <button onclick='hajoSzerkesztes(${JSON.stringify(hajo)})' class='szerkeszt'>Szerkeszt</button>
                <button onclick='hajoTorles(${hajo.az})' class="torol">Töröl</button>
            </td>   
            </tr>`;
        });
        document.getElementById("tabla").innerHTML = rows;
        document.getElementById("nev").value = "";
        document.getElementById("varos").value = "";
        });
}

function hajoMentes(e) {
    e.preventDefault();
    const az = document.getElementById("az").value;
    const nev = document.getElementById("nev").value;
    const varos = document.getElementById("varos").value;
    const data = {az:az, nev: nev, varos: varos };
    const $method = az ? "PUT" : "POST";

    fetch(API, {
        method: $method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText = data.status;
        document.getElementById("az").value = "";
        hajoValasztas();
    });
}

function hajoSzerkesztes(hajo) {
    document.getElementById("message").innerText = "";
    document.getElementById("az").value = hajo.az;
    document.getElementById("nev").value = hajo.nev;
    document.getElementById("varos").value = hajo.varos;
    window.scrollTo({
  top: 0,
  behavior: "smooth"
});

}

function hajoTorles(az) {
    if (!confirm("Biztosan törölni szeretnéd?")) return;
        fetch(API, {
        method: "DELETE",
        body: JSON.stringify({az})
    })
    .then(res => res.json())
    .then(data => {
    document.getElementById("message").innerText = data.status;
    hajoValasztas();
 });
}
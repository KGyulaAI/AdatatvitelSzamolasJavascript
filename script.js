function AtviteliSebessegValtozas(){
    let ertek = document.getElementById("atviteliSebesseg").value;
    document.getElementById("atviteliSebessegSzam").innerHTML = ertek;
}

function AtviteliIdoSzamitas(){
    let atviteliMennyiseg = document.getElementById("atviteliMennyiseg").value;
    let atviteliSebesseg = document.getElementById("atviteliSebesseg").value;

    if (document.getElementById("atviteliMennyisegSelect").value == "MB") {
        atviteliMennyiseg = atviteliMennyiseg * 1000;
    }
    if (document.getElementById("atviteliMennyisegSelect").value == "GB") {
        atviteliMennyiseg = atviteliMennyiseg * 1000 * 1000;
    }
    if (document.getElementById("atviteliMennyisegSelect").value == "TB") {
        atviteliMennyiseg = atviteliMennyiseg * 1000 * 1000 * 1000;
    }

    if (document.getElementById("atviteliSebessegSelect").value == "mb/s") {
        atviteliSebesseg = atviteliSebesseg * 1000;
    }
    if (document.getElementById("atviteliSebessegSelect").value == "gb/s") {
        atviteliSebesseg = atviteliSebesseg * 1000 * 1000;
    }

    document.getElementById("atviteliIdoSzam").innerHTML = atviteliMennyiseg / atviteliSebesseg;
}
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

    if (document.getElementById("atviteliSebessegSelect").value == "MB/s") {
        atviteliSebesseg = atviteliSebesseg * 1000;
    }
    if (document.getElementById("atviteliSebessegSelect").value == "GB/s") {
        atviteliSebesseg = atviteliSebesseg * 1000 * 1000;
    }

    let eredmeny = atviteliMennyiseg / atviteliSebesseg;
    let ora = Math.floor(eredmeny / 3600);
    let perc = Math.floor(eredmeny % 3600 / 60);
    let masodperc = Math.floor(eredmeny % 3600 % 60);

    document.getElementById("atviteliIdoSzam").innerHTML = ora + " Óra " + perc + " Perc " + masodperc + " Másodperc";
}
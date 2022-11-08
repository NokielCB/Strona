var x, prob;
var win = 0;
if (win == 1) {
    document.getElementById("start").style.display = "flex";
    document.getElementById("sprawdz").style.display = "none";
    document.getElementById("odpowiedz").style.display = "none";
    document.getElementById("opis").style.display = "none";
}

function graStart() {
    x = Math.floor(Math.random() * 100) + 1;
    console.log(x);
    //    document.getElementById("odpowiedz").innerHTML = x;
    document.getElementById("start").style.display = "none";
    document.getElementById("sprawdz").style.display = "flex";
    document.getElementById("odpowiedz").style.display = "flex";
    document.getElementById("opis").style.display = "flex";
    document.getElementById("stan").innerHTML = "";
    win = 0;
    prob = 0;
}

function graSprawdz() {
    prob++;
    odp = document.getElementById("odpowiedz").value;
    document.getElementById("odpowiedz").value = "";
    console.log(odp);
    if (x == odp) {
        document.getElementById("stan").innerHTML = "Wygrałeś w "+prob+" prób";
        win++;
    } else if (x < odp) {
        document.getElementById("stan").innerHTML = "Liczba " + odp + " jest za duża";
    } else if (x > odp) {
        document.getElementById("stan").innerHTML = "Liczba " + odp + " jest za mała";
    } else {
        document.getElementById("stan").innerHTML = "Podaj liczbę";
    }
    if (win == 1) {
        document.getElementById("start").innerHTML = "Jeszcze raz";
        document.getElementById("start").style.display = "flex";
        document.getElementById("sprawdz").style.display = "none";
        document.getElementById("odpowiedz").style.display = "none";
        document.getElementById("opis").style.display = "none";
    }
    console.log(x);
}

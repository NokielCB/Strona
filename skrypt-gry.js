var x = Math.floor(Math.random() * 100) + 1;
function graStart() {
    console.log(x);
//    document.getElementById("odpowiedz").innerHTML = x;
    document.getElementById("start").style.display = "none";
    document.getElementById("sprawdz").style.display = "flex";
    document.getElementById("odpowiedz").style.display = "flex";
    document.getElementById("opis").style.display = "flex";
}
function graSprawdz() {
    odp = document.getElementById("odpowiedz").value;
    document.getElementById("odpowiedz").value = "";
    console.log(odp);
    if(x==odp){
        document.getElementById("stan").innerHTML = "Wygrałeś";
    }
    else if(x<odp){
        document.getElementById("stan").innerHTML = "Twoja liczba jest za duża";
    }
    else if(x>odp){
        document.getElementById("stan").innerHTML = "Twoja liczba jest za mała";
    }
    else{
        document.getElementById("stan").innerHTML = "Podaj liczbę";
    }
}
